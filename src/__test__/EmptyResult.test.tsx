import { describe, test, expect, beforeAll } from 'vitest';
import { screen, render } from '@testing-library/react';
import { vi } from 'vitest';
import { EmptyResult } from '../components/EmptyResult/EmptyResult';
import mockRouter from 'next-router-mock';

vi.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

vi.mock('../../hooks/useLocalStorage', () => ({
  useLocalStorage: vi.fn(() => ['bla-bla']),
}));

beforeAll(() => {
  globalThis.localStorage = {
    getItem: vi.fn(() => ['bla-bla']),
    setItem: vi.fn(),
    clear: vi.fn(),
    removeItem: vi.fn(),
  } as unknown as Storage;
});

describe('test EmptyResult', () => {
  test('should display the correct message for non existing search query', () => {
    render(<EmptyResult />);

    const text = screen.getByText('Nothing was found for the search term "bla-bla"');

    expect(text).toBeDefined();
  });
});
