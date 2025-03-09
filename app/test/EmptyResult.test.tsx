import { describe, test, expect, beforeAll } from 'vitest';
import { screen, render } from '@testing-library/react';
import { vi } from 'vitest';
import { EmptyResult } from '../components/EmptyResult/EmptyResult';
import { MemoryRouter } from 'react-router';

vi.mock('../../hooks/useLocalStorage', () => ({
  useLocalStorage: vi.fn(() => ['bla-bla']),
}));

beforeAll(() => {
  globalThis.localStorage = {
    getItem: vi.fn(() => ['bla-bla']),
  } as unknown as Storage;
});

describe('test EmptyResult', () => {
  test('should display the correct message for non existing search query', () => {
    render(
      <MemoryRouter initialEntries={['/?search=bla-bla']}>
        <EmptyResult />
      </MemoryRouter>
    );

    const text = screen.getByText('Nothing was found for the search term "bla-bla"');

    expect(text).toBeDefined();
  });
});
