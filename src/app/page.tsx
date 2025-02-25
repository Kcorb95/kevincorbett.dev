'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Box, Grid, Text, Paper, Stack, Flex, ActionIcon } from '@mantine/core';
import {
  IconBooks,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBriefcase2,
  IconMail,
  IconUser,
  IconUserSquare,
} from '@tabler/icons-react';
import { ReactElement } from 'react';

const PageCard = (
  icon: ReactElement,
  text: string,
  color: string,
  link: string
) => {
  return (
    <Paper
      shadow="xs"
      radius="lg"
      p="lg"
      pb="4rem"
      bg={color}
      component={Link}
      href={link}
      className="cursor-pointer transition-transform duration-150 ease-in-out hover:rotate-[1deg]"
    >
      <Stack align="left" justify="left" gap="md" py="1">
        <Box>{icon}</Box>
        <Text size="xl" fw={800}>
          {text}
        </Text>
      </Stack>
    </Paper>
  );
};

const PageGrid = () => {
  return (
    <Grid columns={12} gutter="lg" pt="7rem" justify="center">
      <Grid.Col span={{ base: 12, md: 5 }}>
        {PageCard(<IconUser size={35} />, 'About me', 'pink', '/about')}
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        {PageCard(
          <IconBriefcase2 size={35} />,
          'Browse projects',
          'violet',
          '/projects'
        )}
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        {PageCard(<IconBooks size={35} />, 'Read blog', 'teal', '/blog')}
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 5 }}>
        {PageCard(
          <IconUserSquare size={35} />,
          'Try demos',
          'yellow',
          '/demos'
        )}
      </Grid.Col>
    </Grid>
  );
};

const HomePage = () => {
  return (
    <Box pb="2.5rem">
      <Grid columns={12} align="flex-start" gutter="xl">
        {/* Left Column */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper
            shadow="md"
            radius="lg"
            p="xl"
            component={Stack}
            justify="center"
            align="center"
            ta="center"
            gap="xs"
          >
            <Image
              src="/memoji_wave.png"
              alt="memoji of kevin waving"
              width={200}
              height={200}
            />
            <Text size="xl" fw="700" pb="45">
              Kevin Corbett
            </Text>
            <Text size="md" pb="20">
              Growth obsessed developer with a passion for building innovative
              solutions.
            </Text>
            <Flex
              justify="center"
              align="center"
              gap="md"
              direction="row"
              className="pt-2"
            >
              <ActionIcon
                variant="transparent"
                size="2xl"
                color="plum"
                aria-label="GitHub"
              >
                <IconBrandGithub size={28} />
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                size="2xl"
                color="plum"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={28} />
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                size="2xl"
                color="plum"
                aria-label="Twitter"
              >
                <IconBrandTwitter size={28} />
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                size="2xl"
                color="plum"
                aria-label="Email"
              >
                <IconMail size={28} />
              </ActionIcon>
            </Flex>
          </Paper>
        </Grid.Col>

        {/* Right Column (offset) */}
        <Grid.Col span={{ base: 12, md: 7 }} offset={{ md: 1 }}>
          <Stack align="start" gap={0}>
            <Text size="8xl" fw={700} lh={1}>
              SOFTWARE
            </Text>
            <Text size="8xl" fw={700} lh={1.2} c="plum">
              ENGINEER
            </Text>
          </Stack>
          <Text size="xl" pt="lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptas
            neque quod non minima soluta odio ut perspiciatis eius adipisci,
            sequi nemo inventore nobis nam eos consectetur fugit asperiores
            consequatur!
          </Text>
          <PageGrid />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default HomePage;
