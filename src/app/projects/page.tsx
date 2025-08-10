import Link from 'next/link';
import { listAllMdxMeta } from '@/lib/mdx';
import {
  Box,
  Title,
  Stack,
  Paper,
  Text,
  Anchor,
  Group,
  Badge,
} from '@mantine/core';

const ProjectsIndexPage = () => {
  const mdxItems = listAllMdxMeta('projects');
  mdxItems.sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );

  return (
    <Box pb="xl">
      <Title order={1} size="3xl" fw="bold">
        Projects
      </Title>
      <Stack component="ul" gap="xl">
        {mdxItems.map((item) => {
          const { slug, frontMatter } = item;
          return (
            <Paper
              key={slug}
              component="li"
              withBorder
              radius="md"
              p="md"
              shadow="xs"
              className="rounded border p-4 shadow-xs transition-shadow hover:shadow-md"
            >
              <Anchor
                component={Link}
                href={`/projects/${slug}`}
                size="xl"
                underline="always"
              >
                {frontMatter.title}
              </Anchor>
              <Text size="sm" c="dimmed">
                {frontMatter.date}
              </Text>
              <Text pb="sm">{frontMatter.description}</Text>
              {frontMatter.tech && (
                <Group gap="xs">
                  {frontMatter.tech.map((t) => (
                    <Badge key={t} variant="light" c="gray" size="xl">
                      {t}
                    </Badge>
                  ))}
                </Group>
              )}
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ProjectsIndexPage;
