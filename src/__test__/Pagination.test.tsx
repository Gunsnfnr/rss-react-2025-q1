import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Pagination } from '../components/Pagination/Pagination';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('test Pagination', () => {
  test('should render text on the button', () => {
    render(<Pagination nextPage={null} setIsLoading={() => {}} />);

    const button = screen.getByText('Prev');
    expect(button).toBeTruthy();
  });
});
