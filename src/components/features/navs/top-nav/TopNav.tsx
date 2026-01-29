'use client';

import { Brand } from './Brand';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from './ThemeToggle';

export const TopNav = () => {
  return (
    <header className="sticky top-0 z-50 h-[6rem] w-full bg-background p-2 dark:bg-background-dark">
      <div className="flex h-full w-full items-center justify-between">
        <Brand />
        <div className="flex items-center gap-[1.6rem]">
          <NavLinks />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
