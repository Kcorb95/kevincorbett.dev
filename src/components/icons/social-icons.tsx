import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const BrandIcon = ({ size = 28, children, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);

export const GitHubIcon = (props: IconProps) => (
  <BrandIcon {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65A6.5 6.5 0 0 0 9 18v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </BrandIcon>
);

export const LinkedInIcon = ({ size = 28, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3v-11zM9.25 9.5h3.83v1.5h.05c.53-.96 1.84-1.98 3.78-1.98 4.04 0 4.79 2.66 4.79 6.12v5.36h-4v-4.75c0-1.13-.02-2.59-1.58-2.59-1.58 0-1.82 1.23-1.82 2.5v4.84h-4v-11z" />
  </svg>
);

export const TwitterIcon = ({ size = 28, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22 5.92c-.74.33-1.54.55-2.38.65a4.14 4.14 0 0 0 1.82-2.29 8.28 8.28 0 0 1-2.63 1 4.13 4.13 0 0 0-7.04 3.77A11.72 11.72 0 0 1 3.26 4.73a4.13 4.13 0 0 0 1.28 5.51 4.1 4.1 0 0 1-1.87-.52v.05a4.13 4.13 0 0 0 3.31 4.05 4.17 4.17 0 0 1-1.86.07 4.14 4.14 0 0 0 3.86 2.87A8.29 8.29 0 0 1 2 18.43a11.69 11.69 0 0 0 6.34 1.86c7.6 0 11.76-6.3 11.76-11.76v-.54A8.4 8.4 0 0 0 22 5.92z" />
  </svg>
);
