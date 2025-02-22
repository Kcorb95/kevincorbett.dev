'use client';

import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';

export const Brand = () => {
  return (
    <Link href="/" className="hover:underline">
      <IconHome size={24} />
    </Link>
  );
};
