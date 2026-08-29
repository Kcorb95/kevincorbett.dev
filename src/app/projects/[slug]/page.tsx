import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAllSlugs, readMdxContent } from '@/lib/mdx';

export async function generateStaticParams() {
  const slugs = getAllSlugs('projects');
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;
export const runtime = 'nodejs';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: ProjectPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const mdx = readMdxContent('projects', slug);

  if (!mdx) {
    return {};
  }

  return {
    title: mdx.data.title,
    description: mdx.data.description ?? mdx.data.excerpt,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: mdx.data.title,
      description: mdx.data.description ?? mdx.data.excerpt,
      type: 'article',
      url: `/projects/${slug}`,
      publishedTime: new Date(mdx.data.date).toISOString(),
    },
  };
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const mdx = readMdxContent('projects', slug);

  if (!mdx) {
    notFound();
  }

  const { data, content } = mdx;

  return (
    <article className="mx-auto max-w-[86rem] rounded-lg border border-border bg-card p-[2.4rem] shadow-sm md:p-[3.2rem]">
      <p className="text-[1.4rem] font-bold uppercase text-primary">{data.date}</p>
      <h1 className="mt-[1rem] text-[4rem] font-black leading-tight md:text-[5.6rem]">
        {data.title}
      </h1>

      {data.description ? (
        <p className="mt-[1.6rem] text-[1.8rem] leading-relaxed text-muted-foreground">
          {data.description}
        </p>
      ) : null}

      <div className="mt-[2rem] flex flex-wrap items-center gap-[0.8rem]">
        {data.tech?.map((tech) => (
          <Badge key={tech} variant="outline" size="lg">
            {tech}
          </Badge>
        ))}
      </div>

      {data.github ? (
        <div className="mt-[2.4rem]">
          <Button asChild variant="outline">
            <a href={data.github} target="_blank" rel="noreferrer">
              View repository
              <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      ) : null}

      <div className="prose prose-lg mt-[3.2rem] max-w-none dark:prose-invert">
        <MDXRemote source={content} />
      </div>
    </article>
  );
};

export default ProjectPage;
