import './globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import { theme } from './theme';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import { TopNav } from '@/components/features/navs/top-nav';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Showcase of my projects and blog posts',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={inter.className} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className="bg-background text-foreground">
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <TopNav />
          <main className="mx-auto max-w-[120rem] px-4 py-6">{children}</main>
        </MantineProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
