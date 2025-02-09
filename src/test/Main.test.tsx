import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Main } from '../components/Main/Main';
import { MemoryRouter } from 'react-router';
describe('test Main', () => {
  test('test render Main', () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    const textOntheButton = screen.getByText('Search');

    expect(textOntheButton).toBeDefined();
  });
});
