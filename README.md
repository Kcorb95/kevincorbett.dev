# Kevin Corbett Portfolio

A modern portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS v4, MDX content, and Vercel analytics.

## Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS v4
- MDX content powered by `gray-matter` and `next-mdx-remote`
- Biome for JS/TS/JSON linting and formatting
- Stylelint for CSS
- Vercel Analytics and Speed Insights

## Development

Use pnpm:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
pnpm lint
pnpm lint:css
pnpm typecheck
pnpm build
pnpm check
```

## Content

Blog posts live in `src/content/blogs`.
Project writeups live in `src/content/projects`.

Each MDX file uses frontmatter for title, date, excerpt/description, tags, and project metadata.

## Deployment

The project is configured for Vercel in `vercel.json`.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
