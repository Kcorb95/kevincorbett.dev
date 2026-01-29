import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-foreground text-background',
        secondary: 'border-transparent bg-muted text-muted-foreground hover:bg-muted/80',
        light: 'border-transparent bg-muted text-muted-foreground',
        outline: 'border-border text-foreground',
      },
      size: {
        sm: 'text-10 px-2 py-0.5',
        default: 'text-12 px-2.5 py-0.5',
        lg: 'text-14 px-3 py-1',
        xl: 'text-16 px-4 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <div ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props} />;
  },
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
