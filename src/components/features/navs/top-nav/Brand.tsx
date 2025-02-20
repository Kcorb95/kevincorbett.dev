'use client';

import { Text } from '@mantine/core';
import Link from 'next/link';

export const Brand = () => {
  return (
    <Link href="/" className="hover:underline">
      <Text fw={700} fz="xl">
        MyPortfolio
      </Text>
    </Link>
  );
};
