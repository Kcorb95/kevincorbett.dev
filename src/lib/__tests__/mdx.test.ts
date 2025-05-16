import { describe, it, expect } from 'vitest';
import { listAllMdxMeta, getAllSlugs, readMdxContent } from '../mdx';

const BLOG_SLUG = 'test-post';
const PROJECT_SLUG = 'test-project';

describe('mdx utilities', () => {
  it('lists metadata for blogs', () => {
    const items = listAllMdxMeta('blogs');
    const slugs = items.map((i) => i.slug);
    expect(slugs).toContain(BLOG_SLUG);
    const item = items.find((i) => i.slug === BLOG_SLUG)!;
    expect(item.frontMatter.title).toBeDefined();
  });

  it('retrieves all project slugs', () => {
    const slugs = getAllSlugs('projects');
    expect(slugs).toContain(PROJECT_SLUG);
  });

  it('reads MDX content', () => {
    const result = readMdxContent('projects', PROJECT_SLUG);
    expect(result).not.toBeNull();
    expect(result!.data.title).toBe('Serverless Image Processor');
    expect(result!.content).toMatch(/Serverless Image Processor/);
  });
});
