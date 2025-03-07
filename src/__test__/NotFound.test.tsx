import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import Page404 from '../app/not-found';
import mockRouter from 'next-router-mock';

vi.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
}));

describe('test NotFound', () => {
  test('should render text on the button', () => {
    render(<Page404 />);

    const text = screen.getByText('Back to the main page');
    expect(text).toBeDefined();
  });
});
