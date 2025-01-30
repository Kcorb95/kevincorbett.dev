import Link from 'next/link';
import { listAllMdxMeta } from '@/lib/mdx';

/**
 * BlogIndexPage Component
 *
 * This component fetches and displays metadata for all blog posts.
 * It renders a list of blog post titles with their corresponding dates and excerpts.
 * Each title links to its respective blog post page (`/blog/[slug]`).
 *
 * @returns {JSX.Element} The rendered blog index page.
 */
export default function BlogIndexPage(): React.ReactElement {
  // Fetch metadata for all MDX blog posts from the 'blogs' directory
  const mdxItems = listAllMdxMeta('blogs');

  // Sort blog posts by date in descending order (most recent first)
  mdxItems.sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );

  return (
    <section className="py-8">
      {/* Page title */}
      <h1 className="mb-4 text-3xl font-bold">Blog</h1>

      {/* List of blog posts */}
      <ul className="space-y-4">
        {mdxItems.map((item) => {
          // Extract necessary metadata from each blog post item
          const { slug, frontMatter } = item;

          return (
            <li key={slug}>
              {/* Link to the individual blog post */}
              <Link href={`/blog/${slug}`} className="text-xl hover:underline">
                {frontMatter.title}
              </Link>

              {/* Display the publication date with a subtle styling */}
              <p className="text-sm text-gray-500">{frontMatter.date}</p>

              {/* Display an excerpt if available, with appropriate text styling */}
              {frontMatter.excerpt && (
                <p className="text-gray-700 dark:text-gray-200">
                  {frontMatter.excerpt}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
