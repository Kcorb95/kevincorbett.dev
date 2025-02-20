'use client';

import Link from 'next/link';
import { Box, Stack, Title, Text, Group, Button } from '@mantine/core';

const HomePage = () => {
  return (
    <Box pb="2.5rem">
      <Stack align="center" gap="xl">
        <Title order={1} size="4xl" fw="bold" ta="center">
          Hey, I’m Kevin Corbett
        </Title>
        <Text size="lg" ta="center">
          I build solutions with JavaScript, AWS, DevOps, and more. I also
          manage developer communities.
        </Text>
        <Group gap="md" justify="center" wrap="wrap">
          <Button component={Link} href="/about" variant="outline">
            About Me
          </Button>
          <Button component={Link} href="/projects" variant="outline">
            Projects
          </Button>
          <Button component={Link} href="/blog" variant="outline">
            Blog
          </Button>
          <Button component={Link} href="/resume" variant="outline">
            Resume
          </Button>
          <Button component={Link} href="/contact" variant="outline">
            Contact
          </Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default HomePage;
