'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

/**
 * ThemeToggle Component
 *
 * A button that allows users to toggle between light and dark mode.
 * It utilizes the `next-themes` package for theme management.
 *
 * The component ensures no hydration mismatch by checking if it has mounted before rendering.
 *
 * @returns {JSX.Element | null} The rendered theme toggle button or `null` if not mounted.
 */
export function ThemeToggle(): React.ReactElement | null {
  // State to track whether the component has mounted
  const [mounted, setMounted] = useState(false);

  // Retrieve the current theme and setter function from `next-themes`
  const { theme, setTheme } = useTheme();

  /**
   * useEffect hook ensures the component is mounted before rendering.
   * This prevents hydration mismatches when SSR and client rendering differ.
   */
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until the component has mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost" // Uses a subtle button style
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} // Toggles between light and dark mode
      size="icon" // Adjusts button size to fit an icon
    >
      {/* Display the Sun icon in dark mode, and Moon icon in light mode */}
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
}
