import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllSlugs, readMdxContent } from '@/lib/mdx';

export async function generateStaticParams() {
  const slugs = getAllSlugs('blogs');
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;
export const runtime = 'nodejs';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

const BlogPostPage = async (props: BlogPostProps) => {
  const { slug } = await props.params;

  const mdx = readMdxContent('blogs', slug);
  if (!mdx) {
    notFound();
  }

  const { data, content } = mdx;

  return (
    <div className="pb-[3.2rem]">
      <h1 className="text-30 font-bold">{data.title}</h1>
      <p className="text-14 text-muted-foreground">{data.date}</p>
      <article className="prose prose-lg max-w-none dark:prose-invert">
        <MDXRemote source={content} />
      </article>
    </div>
  );
};

export default BlogPostPage;
