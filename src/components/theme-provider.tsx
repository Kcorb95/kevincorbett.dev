'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

/**
 * Defines the allowed attribute types for theme switching.
 *
 * The `next-themes` library expects the `attribute` prop to be either:
 * - `"class"` (the default method, applying theme as a CSS class)
 * - A `data-*` attribute (e.g., `"data-theme"`)
 * - An array combining `"class"` and `data-*` attributes
 */
type NextThemesAttribute =
  | 'class'
  | `data-${string}`
  | ('class' | `data-${string}`)[];

/**
 * Custom props for our ThemeProvider component.
 * This allows better type safety and avoids reliance on `next-themes/dist/types`.
 */
interface MyThemeProviderProps {
  children: React.ReactNode;

  /**
   * The HTML attribute used to toggle the theme.
   * Defaults to `"class"`, which applies dark/light mode as a CSS class.
   */
  attribute?: NextThemesAttribute;

  /**
   * The default theme applied when no user preference is saved.
   * Common values: `"light"`, `"dark"`, or `"system"` (OS-level detection).
   * Defaults to `"system"`, which respects the user's OS theme setting.
   */
  defaultTheme?: string;

  /**
   * Enables automatic OS-level theme detection (light/dark mode).
   * If `true`, the theme will follow the user's system preference by default.
   */
  enableSystem?: boolean;
}

/**
 * ThemeProvider Component
 *
 * A wrapper around `next-themes`' provider, providing theme management for the application.
 * This component ensures type safety and prevents type errors from `next-themes`.
 *
 * @param {MyThemeProviderProps} props - The theme provider properties.
 * @param {React.ReactNode} props.children - The child components wrapped by the provider.
 * @param {NextThemesAttribute} [props.attribute="class"] - The attribute used for theme switching.
 * @param {string} [props.defaultTheme="system"] - The default theme if no preference is stored.
 * @param {boolean} [props.enableSystem=true] - Whether to enable OS-level theme detection.
 * @returns {JSX.Element} The `NextThemesProvider` wrapping the children components.
 */
export function ThemeProvider({
  children,
  attribute = 'class',
  defaultTheme = 'system',
  enableSystem = true,
}: MyThemeProviderProps): React.ReactElement {
  return (
    <NextThemesProvider
      attribute={attribute} // Define how the theme is applied (CSS class or data-attribute)
      defaultTheme={defaultTheme} // Set the initial theme if no preference exists
      enableSystem={enableSystem} // Enable/disable OS-level theme detection
    >
      {children} {/* Render the application inside the theme provider */}
    </NextThemesProvider>
  );
}
