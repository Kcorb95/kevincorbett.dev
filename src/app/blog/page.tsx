import Link from 'next/link';
import { listAllMdxMeta } from '@/lib/mdx';
import { Box, Stack, Title, Text, Anchor } from '@mantine/core';

const BlogIndexPage = () => {
  const mdxItems = listAllMdxMeta('blogs');

  mdxItems.sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );

  return (
    <Box pb={32}>
      <Title order={1} size="3xl">
        Blog
      </Title>
      <Stack component="ul" gap={16} mt={16}>
        {mdxItems.map((item) => {
          const { slug, frontMatter } = item;
          return (
            <Box component="li" key={slug}>
              <Link href={`/blog/${slug}`} legacyBehavior>
                {/* No Mantine equivalent for hover:underline & text-xl exists, so we use a className */}
                <Anchor className="text-xl hover:underline">
                  {frontMatter.title}
                </Anchor>
              </Link>
              <Text size="sm" c="dimmed">
                {frontMatter.date}
              </Text>
              {frontMatter.excerpt && (
                // No direct Mantine prop for dynamic dark mode text; using className as fallback
                <Text className="text-gray-700 dark:text-gray-200">
                  {frontMatter.excerpt}
                </Text>
              )}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default BlogIndexPage;
