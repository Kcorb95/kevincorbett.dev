'use client';

import { Stack, Title, Text } from '@mantine/core';

const AboutPage = () => {
  return (
    <Stack gap="md">
      <Title order={1} size="2xl">
        About Me
      </Title>
      <Text>
        I&apos;m a software engineer with X years of experience in JavaScript,
        AWS, and DevOps. I also have a passion for community management, having
        led thousands of devs in projects and events.
      </Text>
      <Text>
        My background includes building scalable microservices, designing CI/CD
        pipelines, and actively contributing to open-source.
      </Text>
    </Stack>
  );
};

export default AboutPage;
