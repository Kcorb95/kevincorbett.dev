import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { demos } from '@/lib/portfolio';

export const metadata: Metadata = {
  title: 'Demos',
  description: 'Prototype demos and interface studies by Kevin Corbett.',
};

const DemosPage = () => {
  return (
    <div>
      <section className="rounded-lg border border-border bg-card p-[2.4rem] shadow-sm md:p-[3.2rem]">
        <p className="text-[1.4rem] font-bold uppercase text-primary">Demos</p>
        <h1 className="mt-[1rem] max-w-[76rem] text-[4rem] font-black leading-tight md:text-[5.6rem]">
          Small prototypes with a point of view.
        </h1>
        <p className="mt-[1.6rem] max-w-[64rem] text-[1.7rem] leading-relaxed text-muted-foreground">
          Interface sketches, workflow ideas, and compact experiments for developer-facing teams.
        </p>
      </section>

      <section className="mt-[2.4rem] grid gap-[1.6rem] md:grid-cols-2">
        {demos.map((demo) => (
          <Link
            key={demo.title}
            href={demo.href}
            className="card-hover rounded-lg border border-border bg-card p-[2rem] shadow-xs"
          >
            <Badge variant="outline" size="lg">
              {demo.status}
            </Badge>
            <h2 className="mt-[1.6rem] text-[2.4rem] font-bold">{demo.title}</h2>
            <p className="mt-[0.8rem] text-[1.5rem] leading-relaxed text-muted-foreground">
              {demo.description}
            </p>
            <span className="mt-[2rem] flex items-center gap-[0.6rem] text-[1.4rem] font-bold">
              Open
              <ArrowUpRight size={16} />
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default DemosPage;
