import Link from 'next/link';
import { listAllMdxMeta } from '@/lib/mdx';

/**
 * ProjectsIndexPage Component
 *
 * This component fetches and displays a list of all project posts.
 * Each project includes a title, date, description, and a list of technologies used.
 * Clicking on a project title navigates to its individual page.
 *
 * @returns {JSX.Element} The rendered projects index page.
 */
export default function ProjectsIndexPage(): React.ReactElement {
  // Retrieve metadata (front matter) for all MDX project files from the 'projects' directory
  const mdxItems = listAllMdxMeta('projects');

  // Sort projects by date in descending order (most recent first)
  mdxItems.sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );

  return (
    <section className="py-8">
      {/* Page title */}
      <h1 className="mb-4 text-3xl font-bold">Projects</h1>

      {/* List of projects */}
      <ul className="space-y-6">
        {mdxItems.map((item) => {
          // Extract necessary metadata from each project item
          const { slug, frontMatter } = item;

          return (
            <li
              key={slug}
              className="rounded border p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Link to the individual project page */}
              <Link
                href={`/projects/${slug}`}
                className="text-xl hover:underline"
              >
                {frontMatter.title}
              </Link>

              {/* Display the project publication date with subtle styling */}
              <p className="text-sm text-gray-500">{frontMatter.date}</p>

              {/* Display the project description */}
              <p className="my-2">{frontMatter.description}</p>

              {/* Conditionally display the tech stack if available */}
              {frontMatter.tech && (
                <div className="flex flex-wrap gap-2">
                  {frontMatter.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
