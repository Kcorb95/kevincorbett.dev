'use client';

import Link from 'next/link';
import { Stack, Title, Text, Button } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';

const ResumePage = () => {
  return (
    <Stack gap="md" align="center">
      <Title order={1} size="3xl">
        Resume
      </Title>
      <Text>Below is my latest resume. Feel free to download!</Text>
      <Button
        rightSection={<IconDownload size={16} />}
        component={Link}
        href="./resume.pdf"
        variant="filled"
        color="cyan"
        size="lg"
      >
        Download
      </Button>
      {/* Could embed an iframe or a web-based version here */}
    </Stack>
  );
};

export default ResumePage;
