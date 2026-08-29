import Link from 'next/link';
import { navLinks } from './NavConfig';

export const NavLinks = () => {
  return (
    <nav aria-label="Primary navigation" className="min-w-0 overflow-x-auto">
      <div className="flex items-center gap-[0.8rem] sm:gap-[1.6rem]">
        {navLinks.map((item) => {
          return (
            <Link key={item.label} href={item.href} className="text-14 hover:underline sm:text-16">
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
