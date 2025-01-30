import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <section className="my-10 space-y-4 text-center">
      <h1 className="text-4xl font-bold">Hey, I’m Kevin Corbett</h1>
      <p className="text-lg">
        I build solutions with JavaScript, AWS, DevOps, and more. I also manage
        developer communities.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link href="/about">
          <Button variant="outline">About Me</Button>
        </Link>
        <Link href="/projects">
          <Button variant="outline">Projects</Button>
        </Link>
        <Link href="/blog">
          <Button variant="outline">Blog</Button>
        </Link>
        <Link href="/resume">
          <Button variant="outline">Resume</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Contact</Button>
        </Link>
      </div>
    </section>
  );
}
