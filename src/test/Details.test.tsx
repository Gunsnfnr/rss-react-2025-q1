import { describe, test, expect, vi, Mock } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Details } from '../components/Details/Details';
import { BrowserRouter } from 'react-router';

globalThis.fetch = vi.fn(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve({}),
  })
) as Mock;

describe('test Details', () => {
  test('test Details', () => {
    render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    );
    const text = screen.getByText('Loading...');

    expect(text).toBeDefined();
  });
});
