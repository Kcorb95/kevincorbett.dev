'use client';

import { useState, useEffect } from 'react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  useEffect(() => {
    // When this effect runs, the component is mounted, so you can safely show icons
    setMounted(true);
  }, []);

  if (!mounted) {
    // Server render: Return a placeholder or nothing (matching minimal HTML).
    return null;
  }

  return (
    <ActionIcon
      variant="default"
      onClick={toggleColorScheme}
      title="Toggle theme"
      size="xl"
    >
      {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </ActionIcon>
  );
};
