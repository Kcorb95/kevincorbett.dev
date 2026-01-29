'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex h-[4rem] w-[4rem] items-center justify-center rounded-md bg-transparent text-foreground hover:bg-accent"
        title="Toggle theme"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-[4rem] w-[4rem] items-center justify-center rounded-md bg-transparent text-foreground hover:bg-accent"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};
