import { describe, test, expect } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { MemoryRouter } from 'react-router';
import { ErrorButton } from '../components/ErrorButton/ErrorButton';

describe('test ErrorBoundary', () => {
  test('should show error message', async () => {
    render(
      <MemoryRouter>
        <ErrorBoundary>
          <ErrorButton />
        </ErrorBoundary>
      </MemoryRouter>
    );
    const errButton = await screen.findByRole('button', { name: 'Error button' });
    fireEvent.click(errButton);

    const text = screen.getByText('Error: Test error text message.');

    expect(text).toBeDefined();
  });
});
