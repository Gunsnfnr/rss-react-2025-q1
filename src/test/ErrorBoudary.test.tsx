import { describe, test, expect } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { MemoryRouter } from 'react-router';
import { ErrorButton } from '../components/ErrorButton/ErrorButton';

describe('test EmptyResult', () => {
  test('test render EmptyResult', async () => {
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
