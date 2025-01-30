import type { NextConfig } from 'next';
import mdx from '@next/mdx';

const withMDX = mdx({
  // Enable .mdx file extension
  extension: /\.mdx?$/,
  // Add any MDX-related configuration here (remark/rehype plugins, etc.)
  // options: {
  //   remarkPlugins: [],
  //   rehypePlugins: [],
  // },
});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  // any additional config you want
};

export default withMDX(nextConfig);
