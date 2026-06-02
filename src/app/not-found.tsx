import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <section className="mx-auto max-w-[68rem] rounded-lg border border-border bg-card p-[2.4rem] text-center shadow-sm md:p-[3.2rem]">
      <p className="text-[1.4rem] font-bold uppercase text-primary">404</p>
      <h1 className="mt-[1rem] text-[4rem] font-black leading-tight">Page not found</h1>
      <p className="mt-[1.2rem] text-[1.6rem] leading-relaxed text-muted-foreground">
        This page is no longer here, or the link points to something that has not been published.
      </p>
      <div className="mt-[2.4rem] flex justify-center">
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
