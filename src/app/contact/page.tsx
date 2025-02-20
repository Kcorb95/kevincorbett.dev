'use client';

import { Box, Stack, Title, Text, List, Anchor } from '@mantine/core';

const ContactPage = () => {
  return (
    <Stack gap="md">
      <Title order={1} size="3xl">
        Contact Me
      </Title>
      <Text>Interested in working together or just want to chat?</Text>
      <Box pl={24}>
        <List spacing="none" type="unordered">
          <List.Item>
            Email:{' '}
            <Anchor
              href="mailto:kevin@example.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              kevin@email.com
            </Anchor>
          </List.Item>
          <List.Item>
            GitHub:{' '}
            <Anchor
              href="https://github.com/kevin"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              github.com/kevin
            </Anchor>
          </List.Item>
          <List.Item>
            LinkedIn:{' '}
            <Anchor
              href="https://linkedin.com/in/kevin"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              linkedin.com/in/kevin
            </Anchor>
          </List.Item>
        </List>
      </Box>
    </Stack>
  );
};

export default ContactPage;
