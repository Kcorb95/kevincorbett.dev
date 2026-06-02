export interface NavLinkItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ExperienceSection {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  summary: string;
  highlights: string[];
  sections?: ExperienceSection[];
}

export type SkillGroupId =
  | 'platform'
  | 'developer-experience'
  | 'full-stack'
  | 'ai-tooling'
  | 'content-platforms'
  | 'developer-communication';

export interface SkillGroup {
  id: SkillGroupId;
  title: string;
  summary: string;
  details: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  details: string;
}

export interface FeaturedProject {
  title: string;
  description: string;
  href: string;
  meta: string;
}

export interface DemoItem {
  title: string;
  description: string;
  href: string;
  status: string;
}

export const profile = {
  name: 'Kevin Corbett',
  title: 'Platform-minded software engineer for developer systems',
  shortTitle: 'Software Engineer',
  location: 'United States',
  email: 'hello@kevincorbett.dev',
  availability: 'Open to platform, developer experience, and full-stack engineering work',
  headline:
    'Platform-minded software engineer building developer systems, AI tooling, and cloud workflows.',
  summary:
    'I build developer-facing systems, cloud workflows, and AI tooling that turn messy needs into useful products. At Postman, I own platform work across infrastructure, web applications, content systems, and developer experience.',
  aboutLine: 'I like the part where messy needs become useful systems.',
  about: [
    'I taught myself to code in high school because I wanted to understand how software worked and because I wanted to make games. I built small apps, game prototypes, mods, websites, and tools, then carried that momentum into college, where I earned degrees in computer science and game design with a minor in cybersecurity.',
    'That builder instinct showed up in my community too. I grew an online community from scratch into a large global audience, and taught myself the content, marketing, operations, and leadership skills the project needed to keep working.',
    'My professional career has kept those threads connected. I have worked as a software engineer, developer relations engineer, freelance technical writer, community founder, and side-project builder, with side projects and community work continuing to sharpen how I think. I like having a lot in motion, and I learn fastest when I am responsible for making something real.',
    'Spending that much time close to developers, users, content teams, and messy internal workflows has shaped how I build. I care about systems that work technically, but I care just as much about whether people understand them, trust them, and can actually use them to get something done.',
    'The work I enjoy most has lots of connected pieces: product surfaces, infrastructure, developer workflows, content systems, automation, and AI tooling. I love solving real problems, designing systems and solutions, staying close to the edge of what is possible, and bringing a founder-minded urgency to the work.',
  ],
  linkedInSummary:
    "Passionate software engineer with a builder's mindset. Scrappy and endlessly curious, I learn by building things, from designing and building systems during the day to endless side projects by night, including open-source tools, AI agents, and a 60K-member community. I've always got something going and I'm always learning something new. I love what I do and I want to spend my career building things that make a difference.",
};

export const navLinks: NavLinkItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Demos', href: '/demos' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/kevincorbett' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kevincorbett' },
  { label: 'Email', href: `mailto:${profile.email}` },
];

export const focusAreas = [
  'Platform engineering',
  'Developer experience',
  'Full-stack systems',
  'AI tooling',
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Science, Computer Science',
    institution: 'Marist University',
    date: '2019',
    details:
      'Data structures, algorithms, database design, software design, computer architecture, networking, web development, and UX/UI.',
  },
  {
    degree: 'Bachelor of Science, Game and Interactive Media Design',
    institution: 'Marist University',
    date: '2019',
    details:
      'Game design, C++, C#, Unity, Unreal Engine, computer graphics, mobile development, and a senior capstone game published on Steam.',
  },
  {
    degree: 'Cybersecurity Minor',
    institution: 'Marist University',
    date: '2019',
    details:
      'Security coursework focused on the systems, networks, and software practices behind resilient applications.',
  },
];

export const experience: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Postman',
    date: 'Nov 2023 - Present',
    summary:
      'Own the full marketing and docs web platform spanning infrastructure, applications, AI tooling, and developer experience across public-facing web properties.',
    highlights: [
      'Re-architected cloud infrastructure from CDK to Terraform and designed an ECS Fargate micro-frontends platform.',
      'Built GitOps deployment workflows with ephemeral preview environments, instant rollbacks, and deployment circuit breakers.',
      'Designed S3, CloudFront, Lambda@Edge, and CloudFront Functions architecture that improved delivery while reducing bandwidth and hosting costs.',
      'Built AI tooling including PR review agents, semantic search, content negotiation for agents, and an agentic landing page builder with live previews.',
      'Led the migration from Gatsby to Next.js and Bootstrap to Tailwind CSS across web properties.',
    ],
    sections: [
      {
        title: 'Infrastructure & Platform',
        items: [
          'Re-architected cloud infrastructure from CDK to Terraform, designing a micro-frontends platform on ECS Fargate optimized for security, availability, and cost.',
          'Built a GitOps pipeline with ephemeral preview environments, instant rollbacks, and deployment circuit breakers.',
          'Designed S3, CloudFront, and Lambda@Edge CDN architecture, reducing load times and bandwidth costs.',
          'Built an edge routing layer on CloudFront Functions for request routing and secure config management.',
          'Engineered edge config workflows for zero-deployment configuration changes with automated backups.',
          'Consolidated a fragmented multi-repo ecosystem into a modern monorepo with standardized tooling.',
          'Reduced AWS hosting costs by 80% through infrastructure optimization.',
        ],
      },
      {
        title: 'AI & Developer Tooling',
        items: [
          'Built an AI code review agent integrated into GitHub PRs with multiple reviewer personas, including security review for vulnerabilities, trust boundaries, and secret exposure.',
          'Built an agentic landing page builder that generates JSON page definitions using live pages and a component manifest as context, constrained to the design system so non-technical marketers can iterate and ship pages with live previews.',
          'Built content negotiation that serves markdown to AI agents and rich HTML to browsers.',
          'Built a vector database for content embeddings powering semantic search across web properties.',
          'Onboarded the team to agentic coding tools including Cursor and Claude Code, multiplying team output.',
        ],
      },
      {
        title: 'Application Engineering',
        items: [
          'Led platform migration from Gatsby to Next.js and Bootstrap to Tailwind CSS across web properties.',
          'Owned CMS, search, and platform integrations including Contentful, Prismic, Sanity, Payload CMS, and Algolia, building the developer tooling and workflows around them.',
        ],
      },
    ],
  },
  {
    title: 'Developer Relations Engineer',
    company: 'Postman',
    date: 'Jan 2022 - Nov 2023',
    summary:
      'Drove community growth and engagement initiatives while designing developer education applications, managing high-traffic community surfaces, and turning repeated developer needs into tools, content, and scalable programs.',
    highlights: [
      'Designed and built full-stack applications for developer education and product onboarding.',
      'Managed the community platform with 2M+ monthly pageviews and provided expert technical support through developer forums.',
      'Built and expanded the global product champions program.',
      'Produced technical content including livestreams, YouTube videos, blog posts, and instructional guides.',
      'Developed automation tooling to streamline internal processes and reporting.',
    ],
    sections: [
      {
        title: 'Developer Education & Product Onboarding',
        items: [
          'Designed and built full-stack applications for developer education and product onboarding.',
          'Produced technical content including livestreams, YouTube videos, blog posts, and instructional guides.',
          'Built demos and workflows that helped developers understand product capabilities faster.',
        ],
      },
      {
        title: 'Community Systems',
        items: [
          'Managed the community platform with 2M+ monthly pageviews and supported developer forums with expert technical support.',
          'Built and expanded the global product champions program, boosting developer engagement worldwide.',
          'Supported virtual and in-person meetups with AV, logistics, and guest speaker sourcing.',
        ],
      },
      {
        title: 'Automation',
        items: ['Developed automation tooling to streamline internal processes and reporting.'],
      },
    ],
  },
  {
    title: 'Founder & Engineer',
    company: 'Independent Hobbyist Community & Creative Studio',
    date: 'Aug 2016 - Present',
    summary:
      'Build software, create technical content, and run a 60K-member community through an independent community, engineering, and content studio driven by curiosity and a love for building things.',
    highlights: [
      'Founded and grew an online community to 60K+ members worldwide.',
      'Led a multidisciplinary staff across events, moderation, design, development, and content.',
      'Built open-source and AI-powered tools including speech-to-text, multi-agent content systems, language learning tools, and community automation.',
      'Shipped 100+ technical content pieces with multiple viral articles and 300K+ pageviews.',
    ],
    sections: [
      {
        title: 'Community & Leadership',
        items: [
          'Founded and grew an online community to 60K+ members worldwide.',
          'Managed 15 direct reports and approximately 60 multidisciplinary staff across events, moderation, design, development, and content.',
          'Built and led a team of four developers delivering projects within time and budget constraints.',
        ],
      },
      {
        title: 'Software Engineering',
        items: [
          'Built an open-source self-hosted speech-to-text application with multi-provider LLM support, a native Mac app in Swift, and a cloud backend.',
          'Designed and built a multi-agent content platform with orchestration, quality validation, and iterative refinement loops.',
          'Built an AI-powered Japanese language learning tool using generative AI for mnemonic generation and image-based recall.',
          'Developed AI-powered chatbots for community growth, engagement, moderation, and automated operations.',
        ],
      },
      {
        title: 'Content & Creative',
        items: [
          'Shipped 100+ technical content pieces with multiple viral articles and 300K+ pageviews.',
          'Wrote keynote presentations, executive communications, white papers, one-pagers, competitive analyses, and sales collateral.',
          'Produced video content, designed landing pages, and built tooling to scale content production.',
        ],
      },
    ],
  },
  {
    title: 'Developer Relations Engineer',
    company: 'GridGain',
    date: 'Aug 2020 - Jan 2022',
    summary:
      'Managed and expanded developer communities for high-profile open-source distributed systems projects while producing technical education and demos for Apache Ignite and GridGain.',
    highlights: [
      'Managed developer communities for open-source distributed systems projects, driving a 140% increase in engagement.',
      'Produced technical content including blogs, webinars, and educational videos on distributed computing.',
      'Built demos and applications showcasing Apache Ignite and GridGain capabilities.',
    ],
    sections: [
      {
        title: 'Developer Community & Education',
        items: [
          'Managed developer communities for open-source distributed systems projects, driving a 140% increase in engagement.',
          'Produced technical content including blogs, webinars, and educational videos on distributed computing.',
          'Built demos and applications showcasing Apache Ignite and GridGain capabilities.',
        ],
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'platform',
    title: 'Developer Platforms',
    summary:
      'Cloud infrastructure, deployment systems, preview environments, rollback paths, and cost-aware delivery.',
    details:
      'Recent work includes AWS ECS Fargate, S3, CloudFront, Lambda, Lambda@Edge, DynamoDB, Secrets Manager, Terraform, Docker, Kubernetes, GitHub Actions, GitOps, infrastructure as code, and deployment circuit breakers.',
  },
  {
    id: 'developer-experience',
    title: 'Developer Experience Tools',
    summary:
      'Internal tools and workflows that help technical teams ship with less ambiguity and fewer repeated steps.',
    details:
      'I have built AI code review, CMS workflows, preview environments, reporting automation, developer education apps, feedback loops, monorepo tooling, Turborepo and PNPM workflows, and practical CI/CD systems.',
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Web Systems',
    summary:
      'Developer-facing web platforms that connect interface quality, backend glue, content, search, and operations.',
    details:
      'My work spans TypeScript, JavaScript, Python, React, Next.js, Svelte, Astro, Node.js, Tailwind CSS, GraphQL, CMS integrations, Algolia, accessibility, performance, and system design.',
  },
  {
    id: 'ai-tooling',
    title: 'AI-Native Workflows',
    summary:
      'Practical LLM systems that improve code review, content creation, search, and agent-readable interfaces.',
    details:
      'Recent systems include multi-persona PR review, agentic page generation, semantic search, vector databases, prompt engineering, generative AI workflows, multi-provider LLM integration, and content negotiation for agents.',
  },
  {
    id: 'content-platforms',
    title: 'Content Platforms',
    summary:
      'Structured publishing systems that make docs and marketing content easier to create, govern, search, and reuse.',
    details:
      'I have worked across MDX, Contentful, Prismic, Sanity, Payload CMS, Algolia, WordPress, Shopify, Discourse, design-system constrained page building, and AI-readable content.',
  },
  {
    id: 'developer-communication',
    title: 'Developer Communication',
    summary:
      'Technical education, demos, community systems, and product onboarding grounded in how developers actually learn.',
    details:
      'That background includes technical writing, developer forums, 2M+ monthly pageviews, product champions, videos, livestreams, guides, demos, executive communications, and a 60K-member independent community.',
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Serverless Image Processor',
    description:
      'An event-driven image workflow that resizes, optimizes, and publishes assets with AWS Lambda and S3.',
    href: '/projects/serverless-image-processor',
    meta: 'AWS Lambda, S3, Node.js',
  },
  {
    title: 'Portfolio Operating System',
    description:
      'A Next.js and MDX foundation for publishing projects, notes, demos, and professional context from one source of truth.',
    href: '/projects/portfolio-operating-system',
    meta: 'Next.js, MDX, Tailwind CSS',
  },
  {
    title: 'Developer Community Hub',
    description:
      'A program toolkit concept for onboarding, resources, and feedback loops in developer communities.',
    href: '/demos/mock-demo',
    meta: 'React, UX systems, automation',
  },
];

export const demos: DemoItem[] = [
  {
    title: 'Community Signal Board',
    description:
      'A compact dashboard concept for tracking program health, content ideas, and developer feedback.',
    href: '/demos/mock-demo',
    status: 'Prototype',
  },
  {
    title: 'MDX Publishing Flow',
    description:
      'A content workflow pattern for turning project notes into polished case studies and blog posts.',
    href: '/blog/modern-portfolio-architecture',
    status: 'Writeup',
  },
];
