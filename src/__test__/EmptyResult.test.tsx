import { describe, test, expect, beforeAll } from 'vitest';
import { screen, render } from '@testing-library/react';
import { vi } from 'vitest';
import { EmptyResult } from '../components/EmptyResult/EmptyResult';

vi.mock('next/navigation', () => ({
  useRouter: () => ({}),
  useSearchParams: () => ({
    get: () => {
      return 'test search';
    },
  }),
}));

beforeAll(() => {
  globalThis.localStorage = {
    getItem: vi.fn(),
  } as unknown as Storage;
});

describe('test EmptyResult', () => {
  test('should display the correct message for non existing search query', () => {
    render(<EmptyResult />);

    const text = screen.getByText('Nothing was found for the search term "test search"');

    expect(text).toBeDefined();
  });
});
