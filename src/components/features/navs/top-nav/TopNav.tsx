'use client';

import { Flex } from '@mantine/core';
import { Brand } from './Brand';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from './ThemeToggle';

/**
 * Full-width top nav:
 * - brand pinned left
 * - nav centered
 * - theme toggle pinned right
 */
export const TopNav = () => {
  return (
    <header className="h-[6rem] w-full border-b border-gray-200 p-2 dark:border-gray-700">
      <Flex w="100%" h="100%" align="center" justify="space-between">
        <Brand /> {/* pinned left */}
        <NavLinks /> {/* could do "mx-auto" or something to center */}
        <ThemeToggle /> {/* pinned right */}
      </Flex>
    </header>
  );
};
