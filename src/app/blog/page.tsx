import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { listAllMdxMeta } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing by Kevin Corbett about web systems and developer experience.',
  alternates: {
    canonical: '/blog',
  },
};

const BlogIndexPage = () => {
  const mdxItems = listAllMdxMeta('blogs');

  return (
    <div>
      <section className="rounded-lg border border-border bg-card p-[2.4rem] shadow-sm md:p-[3.2rem]">
        <p className="text-[1.4rem] font-bold uppercase text-primary">Writing</p>
        <h1 className="mt-[1rem] max-w-[76rem] text-[4rem] font-black leading-tight md:text-[5.6rem]">
          Notes on the work behind the work.
        </h1>
        <p className="mt-[1.6rem] max-w-[64rem] text-[1.7rem] leading-relaxed text-muted-foreground">
          Practical thinking about developer experience, content systems, engineering habits, and
          shipping useful tools.
        </p>
      </section>

      <section className="mt-[2.4rem] grid gap-[1.6rem]">
        {mdxItems.map(({ slug, frontMatter }) => (
          <article
            key={slug}
            className="rounded-lg border border-border bg-card p-[2rem] shadow-xs"
          >
            <p className="text-[1.3rem] font-semibold uppercase text-primary">{frontMatter.date}</p>
            <Link
              href={`/blog/${slug}`}
              className="group mt-[0.8rem] inline-flex items-center gap-[0.8rem] text-[2.4rem] font-bold leading-snug"
            >
              {frontMatter.title}
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-[0.2rem]"
              />
            </Link>
            {frontMatter.excerpt ? (
              <p className="mt-[0.8rem] max-w-[72rem] text-[1.5rem] leading-relaxed text-muted-foreground">
                {frontMatter.excerpt}
              </p>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
};

export default BlogIndexPage;
