import { BookOpen, BriefcaseBusiness, Home, Mail, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX, ReactNode } from 'react';
import {
  SkillsSection,
  WorkExperienceAccordion,
} from '@/components/features/home/HomeClientSections';
import { GitHubIcon, LinkedInIcon } from '@/components/icons/social-icons';
import { experience, profile, socialLinks } from '@/lib/portfolio';

const socialIconMap: Record<string, ReactNode> = {
  GitHub: <GitHubIcon size={28} />,
  LinkedIn: <LinkedInIcon size={28} />,
  Email: <Mail size={28} />,
};

const colorMap = {
  pink: 'bg-[var(--color-bento-pink)]',
  violet: 'bg-[var(--color-bento-violet)]',
  teal: 'bg-[var(--color-bento-teal)]',
  amber: 'bg-[var(--color-bento-amber)]',
} as const;

const HomePage = () => {
  return (
    <div className="grid grid-cols-12 items-start gap-[3.2rem]">
      <div className="col-span-12 self-start lg:sticky lg:top-[9rem] lg:col-span-4">
        <ProfileSection />
      </div>

      <div className="col-span-12 lg:col-span-7 lg:col-start-6">
        <RightColumn />
      </div>
    </div>
  );
};

export default HomePage;

const ProfileSection = () => (
  <section className="rounded-lg bg-card p-[3.2rem] shadow-md">
    <div className="flex flex-col items-center gap-[1.6rem]">
      <ProfileImage />
      <ProfileName />
      <ProfileIntro />
      <ProfileSocials />
    </div>
  </section>
);

const ProfileImage = () => (
  <Image
    src="/memoji_wave.png"
    alt="Memoji illustration of Kevin waving"
    width={200}
    height={200}
    priority
  />
);

const ProfileName = () => <p className="text-20 font-bold">{profile.name}</p>;

const ProfileIntro = () => <p className="text-center text-16">{profile.summary}</p>;

const ProfileSocials = () => (
  <div className="flex items-center justify-center gap-[1rem] pt-[1rem]">
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        className="inline-flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-md text-plum transition-colors hover:bg-accent"
        aria-label={link.label}
        title={link.label}
      >
        {socialIconMap[link.label]}
      </a>
    ))}
  </div>
);

const RightColumn = () => (
  <div className="flex flex-col">
    <Headline />
    <p className="pb-[8rem] text-20">{profile.summary}</p>
    <PageGrid />
    <ExperienceHeadline />
    <WorkExperienceAccordion items={experience} />
    <SkillsHeadline />
    <SkillsSection />
  </div>
);

const Headline = () => (
  <div className="flex flex-col gap-0 pb-[2rem]">
    <p className="text-60 font-bold leading-tight md:text-96">SOFTWARE</p>
    <p className="text-60 font-bold leading-snug text-plum md:text-96">ENGINEER</p>
  </div>
);

const ExperienceHeadline = () => (
  <div className="flex flex-col gap-0 pb-[2rem]">
    <p className="text-60 font-bold leading-tight md:text-96">SELECTED</p>
    <p className="text-60 font-bold leading-snug text-plum md:text-96">EXPERIENCE</p>
  </div>
);

const SkillsHeadline = () => (
  <div className="flex flex-col gap-0 pb-[2rem]">
    <p className="text-60 font-bold leading-tight md:text-96">WHAT</p>
    <p className="text-60 font-bold leading-snug text-plum md:text-96">I BUILD</p>
  </div>
);

const PageGrid = () => (
  <div className="grid grid-cols-12 gap-[1.2rem] pb-[8rem] md:gap-[2rem]">
    <div className="col-span-5">
      <PageCard icon={<User size={35} />} text="About me" color="pink" link="/about" />
    </div>
    <div className="col-span-7">
      <PageCard
        icon={<BriefcaseBusiness size={35} />}
        text="Browse projects"
        color="violet"
        link="/projects"
      />
    </div>
    <div className="col-span-7">
      <PageCard icon={<BookOpen size={35} />} text="Read blog" color="teal" link="/blog" />
    </div>
    <div className="col-span-5">
      <PageCard icon={<Home size={35} />} text="Try demos" color="amber" link="/demos" />
    </div>
  </div>
);

const PageCard = ({
  icon,
  text,
  color,
  link,
}: {
  icon: JSX.Element;
  text: string;
  color: keyof typeof colorMap;
  link: string;
}) => (
  <Link
    href={link}
    className={`card-hover block cursor-pointer rounded-lg p-[1.5rem] shadow-xs ${colorMap[color]}`}
  >
    <div className="flex flex-col items-start gap-[1rem]">
      <div>{icon}</div>
      <p className="pb-[2rem] text-18 font-extrabold text-text dark:text-text-dark md:text-20">
        {text}
      </p>
    </div>
  </Link>
);
