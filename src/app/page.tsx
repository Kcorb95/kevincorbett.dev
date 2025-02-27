'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Grid,
  Text,
  Paper,
  Stack,
  Flex,
  ActionIcon,
  Accordion,
  List,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconUser,
  IconBriefcase2,
  IconBooks,
  IconUserSquare,
  IconPlus,
} from '@tabler/icons-react';
import { JSX } from 'react';

const HomePage = () => {
  return (
    <Grid columns={12} align="flex-start" gutter="xl">
      {/* LEFT COLUMN */}
      <Grid.Col
        span={{ base: 12, lg: 4 }}
        // Sticky only on large, top offset
        className="top-[5rem] self-start lg:sticky"
      >
        <ProfileSection />
      </Grid.Col>

      {/* RIGHT COLUMN */}
      <Grid.Col
        // Full width at base, 7 columns at md
        span={{ base: 12, lg: 7 }}
        // 0 offset at base, 1 offset at md
        offset={{ base: 0, lg: 1 }}
      >
        <RightColumn />
      </Grid.Col>
    </Grid>
  );
};
export default HomePage;

// -- Profile (Left Column)
const ProfileSection = () => (
  <Paper shadow="md" radius="lg" p="xl">
    <Stack gap="md" align="center">
      <ProfileImage />
      <ProfileName />
      <ProfileIntro />
      <ProfileSocials />
    </Stack>
  </Paper>
);

const ProfileImage = () => (
  <Image src="/memoji_wave.png" alt="memoji" width={200} height={200} />
);

const ProfileName = () => (
  <Text size="xl" fw={700}>
    Kevin Corbett
  </Text>
);

const ProfileIntro = () => (
  <Text size="md" ta="center">
    Growth obsessed developer with a passion for building innovative solutions.
  </Text>
);

const ProfileSocials = () => (
  <Flex justify="center" align="center" gap="md" pt="1rem">
    <ActionIcon variant="transparent" size="2xl" color="plum">
      <IconBrandGithub size={28} />
    </ActionIcon>
    <ActionIcon variant="transparent" size="2xl" color="plum">
      <IconBrandLinkedin size={28} />
    </ActionIcon>
    <ActionIcon variant="transparent" size="2xl" color="plum">
      <IconBrandTwitter size={28} />
    </ActionIcon>
    <ActionIcon variant="transparent" size="2xl" color="plum">
      <IconMail size={28} />
    </ActionIcon>
  </Flex>
);

// -- Right Column Content
const RightColumn = () => (
  <Stack align="stretch">
    <Headline />
    <Text size="xl" pb="8rem">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
      aspernatur quis voluptates ipsum rem et laudantium, dolores iusto quam
      maiores pariatur cum rerum deserunt vitae, eum minima voluptatum nisi
      tempore?
    </Text>
    <PageGrid />
    <ExperienceHeadline />
    <WorkExperienceAccordion />
  </Stack>
);

// -- Headline (“SOFTWARE / ENGINEER”)
const Headline = () => (
  <Stack gap={0} pb="2rem">
    <Text fz={{ base: '6rem', md: '9rem' }} fw={700} lh={1}>
      SOFTWARE
    </Text>
    <Text fz={{ base: '6rem', md: '9rem' }} fw={700} lh={1.2} c="plum">
      ENGINEER
    </Text>
  </Stack>
);

// -- 7 YEARS OF EXPERIENCE
const ExperienceHeadline = () => (
  <Stack gap={0} pb="2rem">
    <Text fz={{ base: '6rem', md: '9rem' }} fw={700} lh={1}>
      7 YEARS OF
    </Text>
    <Text fz={{ base: '6rem', md: '9rem' }} fw={700} lh={1.2} c="plum">
      EXPERIENCE
    </Text>
  </Stack>
);

// -- Grid of cards (About, Projects, etc.)
const PageGrid = () => (
  <Grid columns={12} gutter={{ base: 'sm', md: 'lg' }} pb="8rem">
    <Grid.Col span={{ base: 5 }}>
      <PageCard
        icon={<IconUser size={35} />}
        text="About me"
        color="pink"
        link="/about"
      />
    </Grid.Col>
    <Grid.Col span={{ base: 7 }}>
      <PageCard
        icon={<IconBriefcase2 size={35} />}
        text="Browse projects"
        color="violet"
        link="/projects"
      />
    </Grid.Col>
    <Grid.Col span={{ base: 7 }}>
      <PageCard
        icon={<IconBooks size={35} />}
        text="Read blog"
        color="teal"
        link="/blog"
      />
    </Grid.Col>
    <Grid.Col span={{ base: 5 }}>
      <PageCard
        icon={<IconUserSquare size={35} />}
        text="Try demos"
        color="yellow"
        link="/demos"
      />
    </Grid.Col>
  </Grid>
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
  color: string;
  link: string;
}) => (
  <Paper
    shadow="xs"
    radius="lg"
    bg={color}
    component={Link}
    href={link}
    p="1.5rem"
    className="cursor-pointer no-underline transition-transform duration-150 ease-in-out hover:rotate-[1deg]"
  >
    <Stack gap="10px" align="start">
      <Box>{icon}</Box>
      <Text fz={{ base: 'lg', md: 'xl' }} fw={800} pb="2rem">
        {text}
      </Text>
    </Stack>
  </Paper>
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
    description:
      'Did some things. Lots of community stuff. All the management.',
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
  <Accordion
    variant="default"
    w="100%"
    chevron={<IconPlus />}
    chevronPosition="right"
    chevronSize={30}
    styles={{
      // Remove hover background on both item and control
      item: {
        backgroundColor: 'transparent',
      },
      control: {
        backgroundColor: 'transparent',
      },
    }}
  >
    {workExperience.map((item) => (
      <Accordion.Item value={item.id.toString()} key={item.id}>
        <Accordion.Control p={0}>
          <Box pb="md">
            <WorkExperienceLabel
              title={item.title}
              company={item.company}
              date={item.date}
              description={item.description}
            />
          </Box>
        </Accordion.Control>
        <Accordion.Panel>
          <List spacing="xs" size="sm" icon={<span>-</span>}>
            {item.details.map((detail, i) => (
              <List.Item key={i}>{detail}</List.Item>
            ))}
          </List>
        </Accordion.Panel>
      </Accordion.Item>
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
  <Stack gap="sm" pr="xl">
    {/* Title, Company, Date on the left, so it doesn't clash with the + icon */}
    <Stack gap={0}>
      <Text size="xs" c="dimmed">
        {date}
      </Text>
      <Text fw={700}>{title}</Text>
      <Text size="sm" c="dimmed">
        {company}
      </Text>
    </Stack>

    {/* Add space before the + icon by using pb in Accordion.Control */}
    <Text size="sm" pr="xl">
      {description}
    </Text>
  </Stack>
);
