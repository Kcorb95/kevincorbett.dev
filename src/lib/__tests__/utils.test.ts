import { describe, it, expect } from 'vitest';
import { cn } from '../utils';

describe('cn utility', () => {
  it('merges class names', () => {
    expect(cn('text-blue-500', 'bg-red-500')).toBe('text-blue-500 bg-red-500');
  });

  it('deduplicates conflicting classes', () => {
    const result = cn('p-2', { 'text-gray-700': true, 'text-blue-500': false }, 'p-4');
    expect(result).toBe('text-gray-700 p-4');
  });
});
