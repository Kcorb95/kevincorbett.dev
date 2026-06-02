import { Mail } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/icons/social-icons';
import { education, experience, profile, skillGroups, socialLinks } from '@/lib/portfolio';

export const metadata: Metadata = {
  title: 'About',
  description: 'Background, working style, and technical focus areas for Kevin Corbett.',
};

const socialIconMap: Record<string, ReactNode> = {
  GitHub: <GitHubIcon size={16} />,
  Email: <Mail size={16} />,
  Twitter: <TwitterIcon size={16} />,
  LinkedIn: <LinkedInIcon size={16} />,
};

const AboutPage = () => {
  return (
    <div className="grid items-start gap-[3.2rem] lg:grid-cols-[minmax(0,1fr)_34rem]">
      <section className="lg:col-span-2">
        <div className="grid items-start gap-[2rem] md:grid-cols-[20rem_minmax(0,1fr)]">
          <div className="flex flex-col items-center justify-center gap-[1rem]">
            <div className="flex justify-center rounded-lg bg-card p-[1.6rem] shadow-sm">
              <Image
                src="/memoji_wave.png"
                alt="Memoji illustration of Kevin waving"
                width={184}
                height={184}
                priority
              />
            </div>
            <div className="flex items-center gap-[1rem] self-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-md bg-card text-primary shadow-xs transition-colors hover:bg-accent"
                  aria-label={link.label}
                  title={link.label}
                >
                  {socialIconMap[link.label]}
                </a>
              ))}
            </div>
          </div>

          <div className="border-primary border-l-2 pl-[1.8rem] md:mt-[1.8rem]">
            <h1 className="text-[2.2rem] font-black leading-snug md:text-[3rem]">
              Passionate software engineer with a builder&apos;s mindset
            </h1>
            <p className="mt-[1.4rem] text-[1.7rem] leading-relaxed text-muted-foreground">
              {profile.linkedInSummary.replace(
                "Passionate software engineer with a builder's mindset. ",
                '',
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="lg:col-span-2">
        <p className="text-[1.4rem] font-bold uppercase text-primary">Background</p>
        <h2 className="mt-[1rem] text-[3.2rem] font-black">How I got here</h2>
        <div className="mt-[1.6rem] grid gap-[1.2rem] text-[1.7rem] leading-relaxed text-muted-foreground">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="lg:col-span-2">
        <p className="text-[1.4rem] font-bold uppercase text-primary">Focus</p>
        <h2 className="mt-[1rem] text-[3.2rem] font-black">What I build</h2>
        <div className="mt-[1.6rem] grid gap-[1.6rem] md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-border bg-card p-[2rem] shadow-xs"
            >
              <h3 className="text-[1.6rem] font-bold text-primary">{group.title}</h3>
              <p className="mt-[0.8rem] text-[1.4rem] leading-relaxed text-muted-foreground">
                {group.summary}
              </p>
              <p className="mt-[1rem] text-[1.3rem] leading-relaxed text-muted-foreground">
                {group.details}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="lg:col-span-2">
        <p className="text-[1.4rem] font-bold uppercase text-primary">Work</p>
        <h2 className="mt-[1rem] text-[3.2rem] font-black">Experience</h2>
        <div className="mt-[1.6rem] grid gap-[1.6rem]">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.title}`}
              className="rounded-lg border border-border bg-card p-[2rem] shadow-xs"
            >
              <div className="grid gap-[1rem] md:grid-cols-[minmax(0,1fr)_18rem] md:items-start">
                <div>
                  <h3 className="text-[2rem] font-bold">{item.title}</h3>
                  <p className="text-[1.5rem] text-muted-foreground">{item.company}</p>
                </div>
                <p className="text-[1.3rem] font-bold uppercase text-primary md:text-right">
                  {item.date}
                </p>
              </div>
              <p className="mt-[1.2rem] text-[1.5rem] leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
              <div className="mt-[1.6rem] grid gap-[1.6rem] lg:grid-cols-3">
                {(item.sections ?? [{ title: 'Highlights', items: item.highlights }]).map(
                  (section) => (
                    <div key={section.title}>
                      <h4 className="text-[1.4rem] font-bold text-primary">{section.title}</h4>
                      <ul className="mt-[0.8rem] grid gap-[0.8rem] text-[1.4rem] leading-relaxed text-muted-foreground">
                        {section.items.map((detail) => (
                          <li key={detail} className="flex gap-[0.8rem]">
                            <span aria-hidden="true">-</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lg:col-span-2">
        <p className="text-[1.4rem] font-bold uppercase text-primary">Credentials</p>
        <h2 className="mt-[1rem] text-[2.4rem] font-black">Education</h2>
        <div className="mt-[1.2rem] grid gap-[1.2rem] md:grid-cols-2 xl:grid-cols-4">
          {education.map((item) => (
            <article
              key={item.degree}
              className="rounded-lg border border-border bg-card p-[1.6rem] shadow-xs"
            >
              <p className="text-[1.4rem] font-bold text-primary">{item.degree}</p>
              <p className="mt-[0.3rem] text-[1.4rem] text-muted-foreground">
                {item.institution} · {item.date}
              </p>
              <p className="mt-[0.6rem] text-[1.3rem] leading-relaxed text-muted-foreground">
                {item.details}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
