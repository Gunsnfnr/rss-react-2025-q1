import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import NotFound from '../components/NotFound/NotFound';

describe('test NotFound', () => {
  test('should render text on the button', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const text = screen.getByText('Back to the main page');
    expect(text).toBeDefined();
  });
});
