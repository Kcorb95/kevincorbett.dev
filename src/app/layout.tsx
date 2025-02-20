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
          <footer className="mt-8 border-t border-gray-200 py-4 dark:border-gray-700">
            <div className="mx-auto max-w-[120rem] px-4 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Kevin Corbett. All rights
                reserved.
              </p>
            </div>
          </footer>
        </MantineProviders>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
