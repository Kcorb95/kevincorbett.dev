'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

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
      <Button
        type="button"
        variant="ghost"
        size="icon"
        title="Toggle theme"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <Button
      type="button"
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
};
