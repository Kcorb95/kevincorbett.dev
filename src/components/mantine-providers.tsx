'use client';

import React, {
  ReactNode,
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import {
  MantineProvider,
  createTheme,
  TitleProps,
  MantineTheme,
} from '@mantine/core';

const defaultTheme = createTheme({
  fontFamily: 'var(--font-inter), sans-serif',

  fontSizes: {
    '7xs': '1px',
    '6xs': '2px',
    '5xs': '4px',
    '4xs': '6px',
    '3xs': '8px',
    '2xs': '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
    '8xl': '96px',
    '9xl': '128px',
  },

  spacing: {
    none: '0px',
    '4xs': '1px',
    '3xs': '2px',
    '2xs': '4px',
    xs: '6px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
    '8xl': '96px',
    '9xl': '128px',
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

export type ColorScheme = 'light' | 'dark';

interface ColorSchemeContextValue {
  colorScheme: ColorScheme;
  setColorScheme: Dispatch<SetStateAction<ColorScheme>>;
}

export const ColorSchemeContext = createContext<ColorSchemeContextValue>({
  colorScheme: 'light',
  setColorScheme: () => {},
});

export const MantineProviders = ({ children }: { children: ReactNode }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  useEffect(() => {
    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorScheme]);

  return (
    <MantineProvider theme={defaultTheme}>
      <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
        {children}
      </ColorSchemeContext.Provider>
    </MantineProvider>
  );
};
