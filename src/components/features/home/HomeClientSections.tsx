'use client';

import { Cloud, Code2, MonitorCog, Network, Palette, Server } from 'lucide-react';
import type { ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { type ExperienceItem, type SkillGroupId, skillGroups } from '@/lib/portfolio';

const skillIcons: Record<SkillGroupId, ReactNode> = {
  platform: <Cloud size={40} />,
  'developer-experience': <Network size={40} />,
  'full-stack': <Code2 size={40} />,
  'ai-tooling': <MonitorCog size={40} />,
  'content-platforms': <Server size={40} />,
  'developer-communication': <Palette size={40} />,
};

export const WorkExperienceAccordion = ({ items }: { items: ExperienceItem[] }) => (
  <Accordion type="single" collapsible className="w-full pb-[8rem]" defaultValue="0">
    {items.map((item, index) => (
      <AccordionItem value={index.toString()} key={`${item.company}-${item.title}`}>
        <AccordionTrigger>
          <WorkExperienceLabel
            title={item.title}
            company={item.company}
            date={item.date}
            description={item.summary}
          />
        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-none space-y-[1rem] text-14">
            {item.highlights.map((detail) => (
              <li key={detail} className="flex items-start gap-[0.8rem]">
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

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  summary: string;
  details: string;
}

const SkillCard = ({ icon, title, summary, details }: SkillCardProps) => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <div className="card-scale-hover cursor-pointer rounded-lg bg-card p-[1.6rem] shadow-sm">
          <div className="flex items-start gap-[1.6rem]">
            <div className="shrink-0 text-plum">{icon}</div>
            <div className="flex flex-col gap-[0.6rem]">
              <span className="text-16 font-bold leading-snug">{title}</span>
              <span className="text-14 leading-relaxed text-muted-foreground">{summary}</span>
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto max-w-[28rem]">
        <p className="text-14">{details}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export const SkillsSection = () => {
  return (
    <div className="grid grid-cols-12 gap-[1.6rem]">
      {skillGroups.map((skill) => (
        <div key={skill.id} className="col-span-12 lg:col-span-6">
          <SkillCard
            icon={skillIcons[skill.id]}
            title={skill.title}
            summary={skill.summary}
            details={skill.details}
          />
        </div>
      ))}
    </div>
  );
};
