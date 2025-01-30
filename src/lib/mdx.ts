import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Interface representing the front matter metadata of an MDX file.
 */
export interface FrontMatter {
  title: string; // The title of the content
  date: string; // The publication date in ISO format
  slug?: string; // Optional custom slug for the content
  excerpt?: string; // Short preview text for the content
  description?: string; // A longer description of the content
  tech?: string[]; // Array of technologies used (for projects)
  github?: string; // GitHub repository link (for projects)
}

/**
 * Reads a single MDX file from the 'blogs' or 'projects' directory,
 * extracts front matter metadata and content, and returns them.
 * If the file does not exist, it returns `null`.
 *
 * @param {('blogs' | 'projects')} contentType - The type of content (either 'blogs' or 'projects').
 * @param {string} slug - The slug (filename without extension) of the MDX file.
 * @returns { { data: FrontMatter, content: string } | null } Parsed metadata and content, or null if not found.
 */
export function readMdxContent(
  contentType: 'blogs' | 'projects',
  slug: string
): { data: FrontMatter; content: string } | null {
  const baseDir = path.join(process.cwd(), 'src/content', contentType); // Define base directory
  const filePath = path.join(baseDir, slug + '.mdx'); // Construct full file path

  // If the MDX file does not exist, return null
  if (!fs.existsSync(filePath)) {
    return null;
  }

  // Read the file content
  const raw = fs.readFileSync(filePath, 'utf8');

  // Parse front matter metadata and MDX content
  const { data, content } = matter(raw);

  return { data: data as FrontMatter, content };
}

/**
 * Retrieves all slugs (filenames without `.mdx` extension) from the specified content directory.
 *
 * @param {('blogs' | 'projects')} contentType - The type of content (either 'blogs' or 'projects').
 * @returns {string[]} An array of slugs representing the available content files.
 */
export function getAllSlugs(contentType: 'blogs' | 'projects'): string[] {
  const baseDir = path.join(process.cwd(), 'src/content', contentType); // Define base directory

  // If the directory does not exist, return an empty array
  if (!fs.existsSync(baseDir)) {
    return [];
  }

  // Read all MDX files in the directory and extract slugs by removing the extension
  const files = fs.readdirSync(baseDir).filter((f) => f.endsWith('.mdx'));
  return files.map((f) => f.replace(/\.mdx$/, ''));
}

/**
 * Retrieves the front matter (metadata) for all `.mdx` files in the specified content directory.
 *
 * This function does not return the full MDX content, only the metadata and a derived slug.
 *
 * @param {('blogs' | 'projects')} contentType - The type of content (either 'blogs' or 'projects').
 * @returns { { slug: string, frontMatter: FrontMatter }[] } An array of objects containing metadata and slugs.
 */
export function listAllMdxMeta(
  contentType: 'blogs' | 'projects'
): { slug: string; frontMatter: FrontMatter }[] {
  const baseDir = path.join(process.cwd(), 'src/content', contentType); // Define base directory

  // If the directory does not exist, return an empty array
  if (!fs.existsSync(baseDir)) {
    return [];
  }

  // Read all MDX files in the directory
  const files = fs.readdirSync(baseDir).filter((f) => f.endsWith('.mdx'));

  return files.map((fileName) => {
    const fullPath = path.join(baseDir, fileName); // Construct full file path
    const raw = fs.readFileSync(fullPath, 'utf8'); // Read file content
    const { data } = matter(raw); // Parse front matter metadata

    // If there's no explicit slug in front matter, derive it from the filename
    const slug = (data.slug as string) || fileName.replace(/\.mdx$/, '');

    return {
      slug,
      frontMatter: data as FrontMatter,
    };
  });
}
