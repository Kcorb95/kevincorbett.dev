import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Community Signal Board',
  description: 'A compact dashboard prototype for community and developer feedback signals.',
};

const signals = [
  { label: 'High-signal feedback', value: '28', change: '+12%' },
  { label: 'Content ideas', value: '14', change: '+5' },
  { label: 'Open follow-ups', value: '7', change: '-3' },
];

const lanes = [
  {
    title: 'Patterns',
    items: ['API auth confusion', 'More migration examples', 'CLI onboarding friction'],
  },
  {
    title: 'Actions',
    items: ['Draft troubleshooting guide', 'Group feedback by product area', 'Ship demo script'],
  },
  {
    title: 'Signals',
    items: ['Docs search improved', 'Event Q&A themes repeated', 'Examples requested by teams'],
  },
];

const MockDemoPage = () => {
  return (
    <div className="grid gap-[2.4rem]">
      <section className="rounded-lg border border-border bg-card p-[2.4rem] shadow-sm md:p-[3.2rem]">
        <Badge variant="light" size="lg">
          Prototype
        </Badge>
        <h1 className="mt-[1.6rem] max-w-[78rem] text-[4rem] font-black leading-tight md:text-[5.6rem]">
          Community Signal Board
        </h1>
        <p className="mt-[1.6rem] max-w-[64rem] text-[1.7rem] leading-relaxed text-muted-foreground">
          A compact operating surface for turning developer feedback into visible patterns,
          decisions, and follow-up work.
        </p>
      </section>

      <section className="grid gap-[1.6rem] md:grid-cols-3">
        {signals.map((signal) => (
          <article
            key={signal.label}
            className="rounded-lg border border-border bg-card p-[2rem] shadow-xs"
          >
            <p className="text-[1.4rem] text-muted-foreground">{signal.label}</p>
            <div className="mt-[1rem] flex items-end justify-between gap-[1rem]">
              <span className="text-[4rem] font-black leading-none">{signal.value}</span>
              <Badge variant="outline" size="default">
                {signal.change}
              </Badge>
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-[1.6rem] lg:grid-cols-3">
        {lanes.map((lane) => (
          <article
            key={lane.title}
            className="rounded-lg border border-border bg-card p-[2rem] shadow-xs"
          >
            <h2 className="text-[2rem] font-bold">{lane.title}</h2>
            <ul className="mt-[1.2rem] grid gap-[1rem]">
              {lane.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-background px-[1.2rem] py-[1rem] text-[1.5rem]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};

export default MockDemoPage;
