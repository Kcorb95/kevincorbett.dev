'use client';

import Image from 'next/image';
import { Box, Grid, Text, Paper, Stack, Flex, ActionIcon } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from '@tabler/icons-react';

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
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default HomePage;
