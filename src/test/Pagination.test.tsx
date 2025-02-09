import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Pagination } from '../components/Pagination/Pagination';

describe('test Pagination', () => {
  test('test render Pagination', () => {
    const handleBtn = () => {
      localStorage.setItem('gunsnfnr.swQuery', '');
    };
    render(<Pagination handleBtn={handleBtn} page={1} nextPage={null} />);

    const button = screen.getByText('Prev');
    expect(button).toBeTruthy();
  });
});
