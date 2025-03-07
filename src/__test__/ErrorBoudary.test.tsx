import { describe, test, expect } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { ErrorButton } from '../components/ErrorButton/ErrorButton';

vi.mock('next/navigation', () => vi.importActual('next-router-mock'));

describe('test ErrorBoundary', () => {
  test('should show error message', async () => {
    render(
      <ErrorBoundary>
        <ErrorButton />
      </ErrorBoundary>
    );
    const errButton = await screen.findByRole('button', { name: 'Error button' });
    fireEvent.click(errButton);

    const text = screen.getByText('Error: Test error text message.');

    expect(text).toBeDefined();
  });
});
