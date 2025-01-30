import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { readMdxContent, getAllSlugs } from '@/lib/mdx';

/**
 * Generates static parameters for the dynamic project pages.
 * This function retrieves all project slugs and returns them in the format required for
 * Next.js dynamic routing.
 *
 * @returns {Promise<{ slug: string }[]>} An array of objects containing project slugs.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Fetch all available project slugs from the 'projects' directory
  const slugs = getAllSlugs('projects');

  // Return slugs formatted as an array of objects for dynamic routing
  return slugs.map((slug) => ({ slug }));
}

/**
 * ProjectPage Component
 *
 * This component dynamically renders a project page based on the provided slug.
 * It fetches and renders MDX content for the given project. If the project does not exist,
 * it triggers a 404 error page.
 *
 * @param {Object} props - The component properties.
 * @param {Promise<{ slug: string }>} props.params - The dynamic route parameters containing the project slug.
 * @returns {JSX.Element} The rendered project page.
 */
export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  // Await the resolved params to extract the project slug
  const { slug } = await props.params;

  // Retrieve MDX content for the given project slug
  const mdx = readMdxContent('projects', slug);

  // If the project is not found, trigger a 404 error page
  if (!mdx) {
    notFound();
  }

  // Extract metadata (e.g., title, date, tech stack, GitHub link) and content from the MDX file
  const { data, content } = mdx;

  return (
    <article className="prose dark:prose-invert max-w-none py-8">
      {/* Render the project title */}
      <h1>{data.title}</h1>

      {/* Display the project publication date with a subtle styling */}
      <p className="text-sm text-gray-500">{data.date}</p>

      {/* Conditionally display the tech stack if available */}
      {data.tech?.length ? (
        <p className="mb-2 text-sm text-gray-500">
          Tech: {data.tech.join(', ')}
        </p>
      ) : null}

      {/* Render a GitHub link if one is provided */}
      {data.github && (
        <p>
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            View on GitHub
          </a>
        </p>
      )}

      {/* Render the MDX content dynamically */}
      <MDXRemote source={content} />
    </article>
  );
}
