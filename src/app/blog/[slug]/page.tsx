import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { readMdxContent, getAllSlugs } from '@/lib/mdx';

/**
 * Generates the static parameters for dynamic routes in Next.js.
 * This is used to precompute all possible blog post slugs at build time.
 *
 * @returns {Promise<{ slug: string }[]>} An array of objects containing blog post slugs.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getAllSlugs('blogs');
  return slugs.map((slug) => ({ slug }));
}

/**
 * Renders a blog post page based on the provided slug.
 * The function fetches MDX content from the filesystem and renders it dynamically.
 * If the requested post does not exist, it triggers a 404 page.
 *
 * @param {Object} props - The component properties.
 * @param {Promise<{ slug: string }>} props.params - The dynamic route parameters containing the blog post slug.
 * @returns {JSX.Element} The rendered blog post page.
 */
export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const { slug } = await props.params; // Await the resolved params to extract the slug

  const mdx = readMdxContent('blogs', slug); // Retrieve MDX content for the given slug
  if (!mdx) {
    notFound(); // Trigger a 404 page if the content does not exist
  }

  const { data, content } = mdx; // Extract metadata (e.g., title, date) and content from the MDX file

  return (
    <article className="prose dark:prose-invert max-w-none py-8">
      {/* Render the blog post title */}
      <h1>{data.title}</h1>
      {/* Display the publication date with a subtle styling */}
      <p className="text-sm text-gray-500">{data.date}</p>
      {/* Render the MDX content dynamically */}
      <MDXRemote source={content} />
    </article>
  );
}
