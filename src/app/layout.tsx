import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { TopNav } from '@/components/features/navs/top-nav';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { profile } from '@/lib/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL('https://kevincorbett.dev'),
  title: {
    default: `${profile.name} | ${profile.shortTitle}`,
    template: `%s | ${profile.name}`,
  },
  description:
    'Portfolio, project notes, and writing from Kevin Corbett, a software engineer focused on developer-facing products.',
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${profile.name} | ${profile.shortTitle}`,
    description:
      'Portfolio, project notes, and writing from Kevin Corbett, a software engineer focused on developer-facing products.',
    type: 'website',
    url: '/',
    siteName: profile.name,
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopNav />
          <main className="mx-auto w-full max-w-[120rem] px-[1.6rem] py-[3.2rem] md:px-[2.4rem]">
            {children}
          </main>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
