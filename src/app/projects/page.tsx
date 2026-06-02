import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { listAllMdxMeta } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected projects and technical case studies by Kevin Corbett.',
  alternates: {
    canonical: '/projects',
  },
};

const ProjectsIndexPage = () => {
  const mdxItems = listAllMdxMeta('projects');

  return (
    <div>
      <section className="rounded-lg border border-border bg-card p-[2.4rem] shadow-sm md:p-[3.2rem]">
        <p className="text-[1.4rem] font-bold uppercase text-primary">Projects</p>
        <h1 className="mt-[1rem] max-w-[76rem] text-[4rem] font-black leading-tight md:text-[5.6rem]">
          Focused builds with a bias for usefulness.
        </h1>
        <p className="mt-[1.6rem] max-w-[64rem] text-[1.7rem] leading-relaxed text-muted-foreground">
          Case studies and technical notes around web platforms, automation, and developer-facing
          workflows.
        </p>
      </section>

      <section className="mt-[2.4rem] grid gap-[1.6rem] md:grid-cols-2">
        {mdxItems.map(({ slug, frontMatter }) => (
          <article
            key={slug}
            className="card-hover rounded-lg border border-border bg-card p-[2rem] shadow-xs"
          >
            <p className="text-[1.3rem] font-semibold uppercase text-primary">{frontMatter.date}</p>
            <Link
              href={`/projects/${slug}`}
              className="group mt-[0.8rem] inline-flex items-center gap-[0.8rem] text-[2.4rem] font-bold leading-snug"
            >
              {frontMatter.title}
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-[0.2rem]"
              />
            </Link>
            {frontMatter.description ? (
              <p className="mt-[0.8rem] text-[1.5rem] leading-relaxed text-muted-foreground">
                {frontMatter.description}
              </p>
            ) : null}
            {frontMatter.tech?.length ? (
              <div className="mt-[1.4rem] flex flex-wrap gap-[0.8rem]">
                {frontMatter.tech.map((tech) => (
                  <Badge key={tech} variant="outline" size="lg">
                    {tech}
                  </Badge>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
};

export default ProjectsIndexPage;
