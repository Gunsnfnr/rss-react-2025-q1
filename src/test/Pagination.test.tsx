import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Pagination } from '../components/Pagination/Pagination';
import { MemoryRouter } from 'react-router';

describe('test Pagination', () => {
  test('should render text on the button', () => {
    render(
      <MemoryRouter>
        <Pagination nextPage={null} />
      </MemoryRouter>
    );

    const button = screen.getByText('Prev');
    expect(button).toBeTruthy();
  });
});
