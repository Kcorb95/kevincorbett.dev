import { Home } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { profile } from '@/lib/portfolio';
import { cn } from '@/lib/utils';

export const Brand = () => {
  return (
    <Link
      href="/"
      className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
      aria-label={`${profile.name} home`}
      title={`${profile.name} home`}
    >
      <Home size={24} />
    </Link>
  );
};
