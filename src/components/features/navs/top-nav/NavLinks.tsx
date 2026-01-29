'use client';

import Link from 'next/link';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Demos', href: '/demos' },
  { label: 'Contact', href: '/contact' },
];

export const NavLinks = () => {
  return (
    <div className="flex items-center gap-[1.6rem]">
      {navItems.map((item) => (
        <Link key={item.label} href={item.href} className="text-16 hover:underline">
          {item.label}
        </Link>
      ))}
    </div>
  );
};
