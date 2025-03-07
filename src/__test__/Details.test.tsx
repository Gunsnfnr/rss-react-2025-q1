import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Details } from '../components/Details/Details';
import { Provider } from 'react-redux';
import { store } from '../store';
import { mockSpecies } from './mocks/mockSpecies';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('test Details', () => {
  test('should show loader message', () => {
    render(
      <Provider store={store}>
        <Details speciesData={mockSpecies} />
      </Provider>
    );

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText(mockSpecies.name)).toBeInTheDocument();
  });
});
