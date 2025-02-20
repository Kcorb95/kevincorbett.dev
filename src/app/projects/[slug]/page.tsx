import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { readMdxContent, getAllSlugs } from '@/lib/mdx';
import {
  Box,
  Title,
  Text,
  Anchor,
  TypographyStylesProvider,
} from '@mantine/core';

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
    <Box pb="xl">
      <Title order={1}>{data.title}</Title>
      <Text size="sm" c="dimmed">
        {data.date}
      </Text>

      {data.tech?.length ? (
        <Text size="sm" c="dimmed">
          Tech: {data.tech.join(', ')}
        </Text>
      ) : null}

      {data.github && (
        <Text size="sm" pb="sm">
          <Anchor
            href={data.github}
            target="_blank"
            rel="noreferrer"
            c="blue"
            underline="always"
          >
            View on GitHub
          </Anchor>
        </Text>
      )}

      <TypographyStylesProvider>
        <MDXRemote source={content} />
      </TypographyStylesProvider>
    </Box>
  );
};

export default ProjectPage;
