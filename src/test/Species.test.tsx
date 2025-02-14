import { describe, test, expect, vi, Mock } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Results } from '../components/Results/Results';
import { mockSpecies } from './mocks/mockSpecies';

globalThis.fetch = vi.fn(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve({}),
  })
) as Mock;

describe('test Species', () => {
  test('test render', () => {
    render(
      <MemoryRouter>
        <Results searchResults={[mockSpecies]} />,
      </MemoryRouter>
    );

    const text = screen.getByText('Wookie');
    expect(text).toBeDefined();
  });
});
