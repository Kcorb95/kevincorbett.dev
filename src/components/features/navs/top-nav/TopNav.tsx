'use client';

import { Flex } from '@mantine/core';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from './ThemeToggle';
import { Brand } from './Brand';

/**
 * Top navigation:
 * - Brand pinned to far left
 * - NavLinks + ThemeToggle pinned to far right
 */
export const TopNav = () => {
  return (
    // Remove left padding so Brand is exactly at the left edge
    <header className="bg-background dark:bg-background-dark sticky top-0 z-50 h-[6rem] w-full p-2">
      <Flex w="100%" h="100%" align="center" justify="space-between">
        {/* Brand: left edge */}
        <Brand />

        {/* 
          Right section: Nav + Theme 
          Add bottom border to give just this part an underline.
        */}
        <Flex
          gap="md"
          align="center"
          //   className="border-b border-gray-300 pb-[0.5rem]"
        >
          <NavLinks />
          <ThemeToggle />
        </Flex>
      </Flex>
    </header>
  );
};
