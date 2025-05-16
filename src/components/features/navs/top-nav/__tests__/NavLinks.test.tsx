import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { NavLinks } from '../NavLinks';

// Mock next/link to render a simple anchor element
vi.mock('next/link', () => {
  return {
    default: ({ href, children, ...rest }: any) => (
      <a href={href} {...rest}>
        {children}
      </a>
    ),
  };
});

describe('NavLinks component', () => {
  it('renders all navigation links', () => {
    render(<NavLinks />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(5);
    expect(links[0]).toHaveTextContent('About');
    expect(links[0]).toHaveAttribute('href', '/about');
  });
});
