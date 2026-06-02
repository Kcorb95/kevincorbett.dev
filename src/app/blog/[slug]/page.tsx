import type { Metadata } from 'next';
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

export const generateMetadata = async ({ params }: BlogPostProps): Promise<Metadata> => {
  const { slug } = await params;
  const mdx = readMdxContent('blogs', slug);

  if (!mdx) {
    return {};
  }

  return {
    title: mdx.data.title,
    description: mdx.data.excerpt ?? mdx.data.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: mdx.data.title,
      description: mdx.data.excerpt ?? mdx.data.description,
      type: 'article',
      url: `/blog/${slug}`,
      publishedTime: new Date(mdx.data.date).toISOString(),
    },
  };
};

const BlogPostPage = async ({ params }: BlogPostProps) => {
  const { slug } = await params;
  const mdx = readMdxContent('blogs', slug);

  if (!mdx) {
    notFound();
  }

  const { data, content } = mdx;

  return (
    <article className="mx-auto max-w-[82rem] rounded-lg border border-border bg-card p-[2.4rem] shadow-sm md:p-[3.2rem]">
      <p className="text-[1.4rem] font-bold uppercase text-primary">{data.date}</p>
      <h1 className="mt-[1rem] text-[4rem] font-black leading-tight md:text-[5.6rem]">
        {data.title}
      </h1>
      {data.excerpt ? (
        <p className="mt-[1.6rem] text-[1.8rem] leading-relaxed text-muted-foreground">
          {data.excerpt}
        </p>
      ) : null}
      <div className="prose prose-lg mt-[3.2rem] max-w-none dark:prose-invert">
        <MDXRemote source={content} />
      </div>
    </article>
  );
};

export default BlogPostPage;
