'use client';

import { Flex, Text } from '@mantine/core';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

/**
 * NavLinks
 * Renders links in a row with Mantine <Flex>.
 */
export const NavLinks = () => {
  return (
    <Flex gap="lg" align="center">
      {navItems.map((item) => (
        <Link key={item.label} href={item.href} className="hover:underline">
          <Text>{item.label}</Text>
        </Link>
      ))}
    </Flex>
  );
};
