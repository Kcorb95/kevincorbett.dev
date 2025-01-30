'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/features/top-nav/theme-toggle';
import { cn } from '@/lib/utils';

/**
 * Navigation links used in the menu.
 * Each link contains a `name` for display and an `href` for navigation.
 */
const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

/**
 * TopNav Component
 *
 * A responsive navigation bar that includes:
 * - A mobile-friendly hamburger menu
 * - Desktop navigation links
 * - A theme toggle button
 *
 * It adapts to different screen sizes and allows users to switch themes.
 *
 * @returns {JSX.Element} The rendered top navigation bar.
 */
export const TopNav = (): React.ReactElement => {
  const pathname = usePathname(); // Get the current route path
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  return (
    <header className="border-b border-gray-200 px-4 py-3 dark:border-gray-700">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        {/* Mobile Menu Button (visible on smaller screens) */}
        <button
          className="rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" /> // Close (X) icon when menu is open
          ) : (
            <Menu className="h-6 w-6" /> // Menu (☰) icon when menu is closed
          )}
        </button>

        {/* Brand or Logo (visible on desktop) */}
        <Link
          href="/"
          className="hidden text-lg font-bold hover:underline md:block"
        >
          Home
        </Link>

        {/* Desktop Navigation Menu (hidden on mobile) */}
        <NavigationMenu className="hidden flex-1 md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      'rounded-md px-3 py-2 text-sm font-medium hover:underline',
                      pathname === link.href
                        ? 'text-indigo-600 dark:text-indigo-400' // Highlight active page
                        : 'text-gray-700 dark:text-gray-300'
                    )}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <NavigationMenuIndicator />
          <NavigationMenuViewport />
        </NavigationMenu>

        {/* Theme Toggle Button (always visible) */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation Menu (visible only when toggled) */}
      {isMobileMenuOpen && (
        <nav className="mt-2 space-y-1 px-2 pb-3 md:hidden">
          {/* Home Link */}
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Home
          </Link>

          {/* Other Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
