'use client';

import { useContext } from 'react';
import { ActionIcon } from '@mantine/core';
import { ColorSchemeContext } from '@/components/mantine-providers';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const { colorScheme, setColorScheme } = useContext(ColorSchemeContext);

  function toggleScheme() {
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ActionIcon
      variant="default"
      onClick={toggleScheme}
      title="Toggle theme"
      size="xl"
    >
      {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </ActionIcon>
  );
};
