import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { readMdxContent, getAllSlugs } from '@/lib/mdx';
import { Box, Title, Text } from '@mantine/core';
import { MdxContent } from '@/components/features/mdx/MdxContent';

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
    <Box pb="xl">
      <Title order={1}>{data.title}</Title>
      <Text size="sm" c="dimmed">
        {data.date}
      </Text>
      <MdxContent>
        <MDXRemote source={content} />
      </MdxContent>
    </Box>
  );
};

export default BlogPostPage;
