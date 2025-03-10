'use client';

import {
  createTheme,
  TitleProps,
  MantineTheme,
  virtualColor,
} from '@mantine/core';
import { generateColors } from '@mantine/colors-generator';

export const theme = createTheme({
  /* Update scale to match 10px base font size */
  scale: 1,
  /** Breakpoints (xs-xl) */
  breakpoints: {
    xs: '30em', // 480px
    sm: '40em', // 640px
    md: '48em', // 768px
    lg: '64em', // 1024px
    xl: '80em', // 1280px
  },
  /** Colors (primary, secondary, etc.) */
  primaryColor: 'primary',
  colors: {
    primary: virtualColor({
      name: 'primary',
      dark: 'off-white',
      light: 'off-black',
    }),
    'off-white': [
      '#f5f5f5',
      '#f5f5f5',
      '#f5f5f5',
      '#f5f5f5',
      '#f5f5f5',
      '#f5f5f5',
      '#f5f5f5',
      '#f5f5f5',
      '#f5f5f5',
      '#f5f5f5',
    ],
    'off-black': [
      '#1a1b1e',
      '#1a1b1e',
      '#1a1b1e',
      '#1a1b1e',
      '#1a1b1e',
      '#1a1b1e',
      '#1a1b1e',
      '#1a1b1e',
      '#1a1b1e',
      '#1a1b1e',
    ],
    plum: generateColors('#A64D79'),
  },

  /** Font sizes (xs-xl) aligned with Tailwind’s base-10 rem scale */
  fontSizes: {
    '7xs': '0.1rem',
    '6xs': '0.2rem',
    '5xs': '0.4rem',
    '4xs': '0.6rem',
    '3xs': '0.8rem',
    '2xs': '1rem',
    xs: '1.2rem', // 12px
    sm: '1.4rem', // 14px
    md: '1.6rem', // 16px
    lg: '1.8rem', // 18px
    xl: '2.0rem', // 20px
    '2xl': '2.4rem',
    '3xl': '3rem',
    '4xl': '3.6rem',
    '5xl': '4.8rem',
    '6xl': '6rem',
    '7xl': '7.2rem',
    '8xl': '9.6rem',
    '9xl': '12.8rem',
  },
  /** Spacing (xs-xl) using the same values as Tailwind’s spacing scale */
  spacing: {
    '6xs': '0.1rem',
    '5xs': '0.2rem',
    '4xs': '0.4rem',
    '3xs': '0.6rem',
    '2xs': '0.8rem',
    xs: '1.0rem', // 10px
    sm: '1.2rem', // 12px
    md: '1.6rem', // 16px
    lg: '2.0rem', // 20px
    xl: '3.2rem', // 32px
    '2xl': '2.4rem',
    '3xl': '3rem',
    '4xl': '3.6rem',
    '5xl': '4.8rem',
    '6xl': '6rem',
    '7xl': '7.2rem',
    '8xl': '9.6rem',
    '9xl': '12.8rem',
  },
  /** Border radius (xs-xl) exactly matching Mantine (and Tailwind) values */
  radius: {
    xs: '0.125rem', // 2px
    sm: '0.25rem', // 4px
    md: '0.5rem', // 8px
    lg: '1rem', // 16px
    xl: '2rem', // 32px
  },
  defaultRadius: 'sm', // Use 'sm' (4px) as default border radius
  /** Shadows (xs-xl) identical to Mantine’s default shadows (same as Tailwind’s) */
  shadows: {
    xs: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
    sm: '0 1px 3px rgba(0,0,0,0.05), 0 10px 15px -5px rgba(0,0,0,0.05), 0 7px 7px -5px rgba(0,0,0,0.04)',
    md: '0 1px 3px rgba(0,0,0,0.05), 0 20px 25px -5px rgba(0,0,0,0.05), 0 10px 10px -5px rgba(0,0,0,0.04)',
    lg: '0 1px 3px rgba(0,0,0,0.05), 0 28px 23px -7px rgba(0,0,0,0.05), 0 12px 12px -7px rgba(0,0,0,0.04)',
    xl: '0 1px 3px rgba(0,0,0,0.05), 0 36px 28px -7px rgba(0,0,0,0.05), 0 17px 17px -7px rgba(0,0,0,0.04)',
  },
  components: {
    Button: {
      defaultProps: {
        /** Make 'lg' the default for bigger, comfortable buttons */
        size: 'lg',
      },
    },

    Title: {
      // Override Title styles so that its size prop uses our extended fontSizes.
      // When using <Title size="2xl"> it will look up theme.fontSizes["2xl"].
      styles: (theme: MantineTheme, props: TitleProps) => ({
        root: {
          fontSize:
            theme.fontSizes[props.size as keyof typeof theme.fontSizes] ||
            theme.fontSizes.xl,
        },
      }),
    },
    List: {
      defaultProps: {
        spacing: 'md',
      },
      // Override List styles so that its spacing prop maps to our extended spacing scale.
    },
  },
  // Add more theme overrides here if needed
});
