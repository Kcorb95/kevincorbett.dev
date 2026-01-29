import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { listAllMdxMeta } from '@/lib/mdx';

const ProjectsIndexPage = () => {
  const mdxItems = listAllMdxMeta('projects');
  mdxItems.sort(
    (a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime(),
  );

  return (
    <div className="pb-[3.2rem]">
      <h1 className="text-30 font-bold">Projects</h1>
      <ul className="flex flex-col gap-[3.2rem]">
        {mdxItems.map((item) => {
          const { slug, frontMatter } = item;
          return (
            <li
              key={slug}
              className="rounded-md border border-border p-[1.6rem] shadow-xs transition-shadow hover:shadow-md"
            >
              <Link href={`/projects/${slug}`} className="text-20 underline">
                {frontMatter.title}
              </Link>
              <p className="text-14 text-muted-foreground">{frontMatter.date}</p>
              <p className="pb-[1.2rem] text-16">{frontMatter.description}</p>
              {frontMatter.tech && (
                <div className="flex flex-wrap gap-[0.8rem]">
                  {frontMatter.tech.map((t) => (
                    <Badge key={t} variant="light" size="xl">
                      {t}
                    </Badge>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectsIndexPage;
