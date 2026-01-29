import Link from 'next/link';
import { listAllMdxMeta } from '@/lib/mdx';

const BlogIndexPage = () => {
  const mdxItems = listAllMdxMeta('blogs');

  mdxItems.sort(
    (a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime(),
  );

  return (
    <div className="pb-[3.2rem]">
      <h1 className="text-30 font-bold">Blog</h1>
      <ul className="mt-[1.6rem] flex flex-col gap-[1.6rem]">
        {mdxItems.map((item) => {
          const { slug, frontMatter } = item;
          return (
            <li key={slug}>
              <Link href={`/blog/${slug}`} className="text-20 hover:underline">
                {frontMatter.title}
              </Link>
              <p className="text-14 text-muted-foreground">{frontMatter.date}</p>
              {frontMatter.excerpt && (
                <p className="text-gray-700 dark:text-gray-200">{frontMatter.excerpt}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogIndexPage;
