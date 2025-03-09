import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import Page404 from '../pages/404';
import mockRouter from 'next-router-mock';

vi.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

describe('test NotFound', () => {
  test('should render text on the button', () => {
    render(<Page404 />);

    const text = screen.getByText('Back to the main page');
    expect(text).toBeDefined();
  });
});
