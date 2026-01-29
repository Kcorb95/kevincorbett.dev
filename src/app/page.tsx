'use client';

import {
  IconBooks,
  IconBrandAws,
  IconBrandCss3,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTwitter,
  IconBriefcase2,
  IconMail,
  IconUser,
  IconUserSquare,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX, ReactNode } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const HomePage = () => {
  return (
    <div className="grid grid-cols-12 items-start gap-[3.2rem]">
      {/* LEFT COLUMN */}
      <div className="col-span-12 self-start lg:sticky lg:top-[5rem] lg:col-span-4">
        <ProfileSection />
      </div>

      {/* RIGHT COLUMN */}
      <div className="col-span-12 lg:col-span-7 lg:col-start-6">
        <RightColumn />
      </div>
    </div>
  );
};
export default HomePage;

// -- Profile (Left Column)
const ProfileSection = () => (
  <div className="rounded-lg bg-card p-[3.2rem] shadow-md">
    <div className="flex flex-col items-center gap-[1.6rem]">
      <ProfileImage />
      <ProfileName />
      <ProfileIntro />
      <ProfileSocials />
    </div>
  </div>
);

const ProfileImage = () => <Image src="/memoji_wave.png" alt="memoji" width={200} height={200} />;

const ProfileName = () => <p className="text-20 font-bold">Kevin Corbett</p>;

const ProfileIntro = () => (
  <p className="text-center text-16">
    Growth obsessed developer with a passion for building innovative solutions.
  </p>
);

const ProfileSocials = () => (
  <div className="flex items-center justify-center gap-[1rem] pt-[1rem]">
    <button
      type="button"
      className="inline-flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-md text-plum"
    >
      <IconBrandGithub size={28} />
    </button>
    <button
      type="button"
      className="inline-flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-md text-plum"
    >
      <IconBrandLinkedin size={28} />
    </button>
    <button
      type="button"
      className="inline-flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-md text-plum"
    >
      <IconBrandTwitter size={28} />
    </button>
    <button
      type="button"
      className="inline-flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-md text-plum"
    >
      <IconMail size={28} />
    </button>
  </div>
);

// -- Right Column Content
const RightColumn = () => (
  <div className="flex flex-col">
    <Headline />
    <p className="pb-[8rem] text-20">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto aspernatur quis
      voluptates ipsum rem et laudantium, dolores iusto quam maiores pariatur cum rerum deserunt
      vitae, eum minima voluptatum nisi tempore?
    </p>
    <PageGrid />
    <ExperienceHeadline />
    <WorkExperienceAccordion />
    <SkillsHeadline />
    <SkillsSection />
  </div>
);

// -- Headline ("SOFTWARE / ENGINEER")
const Headline = () => (
  <div className="flex flex-col gap-0 pb-[2rem]">
    <p className="text-60 font-bold leading-tight md:text-96">SOFTWARE</p>
    <p className="text-60 font-bold leading-snug text-plum md:text-96">ENGINEER</p>
  </div>
);

// -- 7 YEARS OF EXPERIENCE
const ExperienceHeadline = () => (
  <div className="flex flex-col gap-0 pb-[2rem]">
    <p className="text-60 font-bold leading-tight md:text-96">7 YEARS OF</p>
    <p className="text-60 font-bold leading-snug text-plum md:text-96">EXPERIENCE</p>
  </div>
);

const SkillsHeadline = () => (
  <div className="flex flex-col gap-0 pb-[2rem]">
    <p className="text-60 font-bold leading-tight md:text-96">MY</p>
    <p className="text-60 font-bold leading-snug text-plum md:text-96">SKILLS</p>
  </div>
);

// Color mapping for PageCard - muted colors defined in globals.css
const colorMap: Record<string, string> = {
  pink: 'bg-[var(--color-bento-pink)]',
  violet: 'bg-[var(--color-bento-violet)]',
  teal: 'bg-[var(--color-bento-teal)]',
  amber: 'bg-[var(--color-bento-amber)]',
};

// -- Grid of cards (About, Projects, etc.)
const PageGrid = () => (
  <div className="grid grid-cols-12 gap-[1.2rem] pb-[8rem] md:gap-[2rem]">
    <div className="col-span-5">
      <PageCard icon={<IconUser size={35} />} text="About me" color="pink" link="/about" />
    </div>
    <div className="col-span-7">
      <PageCard
        icon={<IconBriefcase2 size={35} />}
        text="Browse projects"
        color="violet"
        link="/projects"
      />
    </div>
    <div className="col-span-7">
      <PageCard icon={<IconBooks size={35} />} text="Read blog" color="teal" link="/blog" />
    </div>
    <div className="col-span-5">
      <PageCard icon={<IconUserSquare size={35} />} text="Try demos" color="amber" link="/demos" />
    </div>
  </div>
);

// -- Individual card (icon top-left at 10px, text below at left edge)
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

// -- Accordion Data
const workExperience = [
  {
    id: 0,
    title: 'Software Engineer',
    company: 'Postman',
    date: '2021 - Present',
    description:
      'Full-stack developer on the marketing engineering team. Built numerous tools and applications to help the marketing team scale.',
    details: ['Built a thing', 'Did another thing', 'Wrote some code'],
  },
  {
    id: 1,
    title: 'Community Manager',
    company: 'Postman',
    date: '2021 - 2024',
    description:
      'Responsible for managing the Postman community. Built and ran the community ambassador program.',
    details: ['Built a thing', 'Did another thing', 'Wrote some code'],
  },
  {
    id: 2,
    title: 'Community Manager',
    company: 'GridGain',
    date: '2020 - 2021',
    description: 'Did some things. Lots of community stuff. All the management.',
    details: ['Built a thing', 'Did another thing', 'Wrote some code'],
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: 'Freelance',
    date: '2016 - Present',
    description:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur quis voluptates ipsum rem et laudantium, dolores iusto quam maiores pariatur cum rerum deserunt vitae, eum minima voluptatum nisi tempore?',
    details: ['Built a thing', 'Did another thing', 'Wrote some code'],
  },
];

// -- Work Experience Accordion
const WorkExperienceAccordion = () => (
  <Accordion type="single" collapsible className="w-full pb-[8rem]">
    {workExperience.map((item) => (
      <AccordionItem value={item.id.toString()} key={item.id}>
        <AccordionTrigger>
          <WorkExperienceLabel
            title={item.title}
            company={item.company}
            date={item.date}
            description={item.description}
          />
        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-none space-y-[1rem] text-14">
            {item.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-2">
                <span>-</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const WorkExperienceLabel = ({
  title,
  company,
  date,
  description,
}: {
  title: string;
  company: string;
  date: string;
  description: string;
}) => (
  <div className="flex flex-col gap-[1.2rem] pr-[3.2rem]">
    <div className="flex flex-col gap-0">
      <span className="text-14 text-muted-foreground">{date}</span>
      <span className="text-18 font-bold">{title}</span>
      <span className="text-16 text-muted-foreground">{company}</span>
    </div>
    <p className="pr-[3.2rem] text-16">{description}</p>
  </div>
);

const skillsData = [
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    icon: <IconBrandReact size={40} />,
    details: 'A JavaScript library for building user interfaces',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    icon: <IconBrandNodejs size={40} />,
    details: 'A runtime environment for executing JavaScript outside a browser',
  },
  {
    id: 'css',
    name: 'CSS3',
    category: 'Frontend',
    icon: <IconBrandCss3 size={40} />,
    details: 'Used to style HTML documents with layout and design',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend framework',
    icon: <IconBrandNextjs size={40} />,
    details: 'A React framework for production',
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'Cloud',
    icon: <IconBrandAws size={40} />,
    details: 'Amazon Web Services',
  },
];

interface SkillCardProps {
  icon: ReactNode;
  name: string;
  category: string;
  details: string;
}

const SkillCard = ({ icon, name, category, details }: SkillCardProps) => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <div className="card-scale-hover cursor-pointer rounded-lg bg-card p-[1.6rem] shadow-sm">
          <div className="flex items-center gap-[1.6rem]">
            {icon}
            <div className="flex flex-col gap-[0.2rem]">
              <span className="text-16 font-bold leading-snug">{name}</span>
              <span className="text-14 text-muted-foreground">{category}</span>
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto max-w-[20rem]">
        <p className="text-14">{details}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

const SkillsSection = () => {
  return (
    <div className="grid grid-cols-12 gap-[1.6rem]">
      {skillsData.map((skill) => (
        <div key={skill.id} className="col-span-12 lg:col-span-6">
          <SkillCard
            icon={skill.icon}
            name={skill.name}
            category={skill.category}
            details={skill.details}
          />
        </div>
      ))}
    </div>
  );
};
