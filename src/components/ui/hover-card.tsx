'use client';

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as React from 'react';
import { cn } from '@/lib/utils';

interface HoverCardProps extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root> {
  openDelay?: number;
  closeDelay?: number;
}

const HoverCard = ({ openDelay = 0, closeDelay = 0, ...props }: HoverCardProps) => (
  <HoverCardPrimitive.Root openDelay={openDelay} closeDelay={closeDelay} {...props} />
);

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ComponentRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      'z-50 rounded-md border border-border bg-popover p-[1.2rem] text-popover-foreground shadow-md outline-none',
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
