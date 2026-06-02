import { ArrowUpRight, Mail } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { profile, socialLinks } from '@/lib/portfolio';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Kevin Corbett for product engineering and developer experience work.',
};

const ContactPage = () => {
  return (
    <div className="grid gap-[2.4rem] lg:grid-cols-[minmax(0,1fr)_34rem]">
      <section className="rounded-lg border border-border bg-card p-[2.4rem] shadow-sm md:p-[3.2rem]">
        <p className="text-[1.4rem] font-bold uppercase text-primary">Contact</p>
        <h1 className="mt-[1rem] max-w-[78rem] text-[4rem] font-black leading-tight md:text-[6.4rem]">
          Good work starts with a clear conversation.
        </h1>
        <p className="mt-[2rem] max-w-[64rem] text-[1.8rem] leading-relaxed text-muted-foreground">
          I am interested in focused product engineering, developer experience, automation, and
          content-system work where the details matter.
        </p>
        <div className="mt-[3.2rem] flex flex-wrap gap-[1rem]">
          <Button asChild size="lg">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} />
              Email Kevin
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">Review projects</Link>
          </Button>
        </div>
      </section>

      <aside className="rounded-lg border border-border bg-card p-[2rem] shadow-xs">
        <h2 className="text-[1.8rem] font-bold">Find me</h2>
        <div className="mt-[1.2rem] grid gap-[1rem]">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center justify-between rounded-md border border-border px-[1.2rem] py-[1rem] text-[1.5rem] font-semibold transition-colors hover:bg-accent"
            >
              <span>{link.label}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default ContactPage;
