import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import { MantineProviders } from '@/components/mantine-providers';
import { TopNav } from '@/components/features/navs/top-nav';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

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
    <html lang="en" className={inter.className}>
      <body className="bg-background text-foreground">
        <MantineProviders>
          <TopNav />
          <main className="mx-auto max-w-[120rem] px-4 py-6">{children}</main>
        </MantineProviders>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
