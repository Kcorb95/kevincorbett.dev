import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export interface FrontMatter {
  title: string;
  date: string;
  slug?: string;
  excerpt?: string;
  description?: string;
  tech?: string[];
  github?: string;
}

interface MdxMetaItem {
  slug: string;
  frontMatter: FrontMatter;
}

export const listAllMdxMeta = (contentType: 'blogs' | 'projects'): MdxMetaItem[] => {
  const baseDir = path.join(process.cwd(), 'src/content', contentType);
  if (!fs.existsSync(baseDir)) {
    return [];
  }
  const files = fs.readdirSync(baseDir).filter((f) => f.endsWith('.mdx'));

  return files.map((fileName) => {
    const fullPath = path.join(baseDir, fileName);
    const raw = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(raw);
    const slug = (data.slug as string) || fileName.replace(/\.mdx$/, '');
    return { slug, frontMatter: data as FrontMatter };
  });
};

export const getAllSlugs = (contentType: 'blogs' | 'projects'): string[] => {
  const baseDir = path.join(process.cwd(), 'src/content', contentType);
  if (!fs.existsSync(baseDir)) {
    return [];
  }
  return fs
    .readdirSync(baseDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
};

export const readMdxContent = (contentType: 'blogs' | 'projects', slug: string) => {
  const baseDir = path.join(process.cwd(), 'src/content', contentType);
  const filePath = path.join(baseDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return { data: data as FrontMatter, content };
};
