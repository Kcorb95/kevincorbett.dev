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
  featured?: boolean;
}

interface MdxMetaItem {
  slug: string;
  frontMatter: FrontMatter;
}

type ContentType = 'blogs' | 'projects';

const getContentDir = (contentType: ContentType) =>
  path.join(process.cwd(), 'src/content', contentType);

const getMdxFiles = (contentType: ContentType) => {
  const baseDir = getContentDir(contentType);

  if (!fs.existsSync(baseDir)) {
    return [];
  }

  return fs.readdirSync(baseDir).filter((fileName) => fileName.endsWith('.mdx'));
};

const getSlugFromFileName = (fileName: string) => fileName.replace(/\.mdx$/, '');

const readMdxFile = (contentType: ContentType, fileName: string) => {
  const fullPath = path.join(getContentDir(contentType), fileName);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  const slug = (data.slug as string) || getSlugFromFileName(fileName);

  return {
    slug,
    frontMatter: data as FrontMatter,
    content,
    fileName,
  };
};

export const listAllMdxMeta = (contentType: ContentType): MdxMetaItem[] => {
  return getMdxFiles(contentType)
    .map((fileName) => {
      const { slug, frontMatter } = readMdxFile(contentType, fileName);
      return { slug, frontMatter };
    })
    .sort(
      (a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime(),
    );
};

export const getAllSlugs = (contentType: ContentType): string[] => {
  return listAllMdxMeta(contentType).map((item) => item.slug);
};

export const readMdxContent = (contentType: ContentType, slug: string) => {
  const files = getMdxFiles(contentType);
  const directFile = `${slug}.mdx`;
  const matchingFile = files.includes(directFile)
    ? directFile
    : files.find((fileName) => readMdxFile(contentType, fileName).slug === slug);

  if (!matchingFile) {
    return null;
  }

  const { frontMatter, content } = readMdxFile(contentType, matchingFile);
  return { data: frontMatter, content };
};
