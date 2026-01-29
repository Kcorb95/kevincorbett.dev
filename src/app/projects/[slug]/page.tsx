import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
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

const ProjectPage = async (props: ProjectPageProps) => {
  const { slug } = await props.params;

  const mdx = readMdxContent('projects', slug);
  if (!mdx) {
    notFound();
  }

  const { data, content } = mdx;

  return (
    <div className="pb-[3.2rem]">
      <h1 className="text-30 font-bold">{data.title}</h1>
      <p className="text-14 text-muted-foreground">{data.date}</p>

      {data.tech?.length ? (
        <p className="text-14 text-muted-foreground">Tech: {data.tech.join(', ')}</p>
      ) : null}

      {data.github && (
        <p className="pb-[1.2rem] text-14">
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline dark:text-blue-400"
          >
            View on GitHub
          </a>
        </p>
      )}

      <article className="prose prose-lg max-w-none dark:prose-invert">
        <MDXRemote source={content} />
      </article>
    </div>
  );
};

export default ProjectPage;
