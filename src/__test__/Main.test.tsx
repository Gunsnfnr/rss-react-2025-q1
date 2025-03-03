import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Main } from '../components/Main/Main';
import { Provider } from 'react-redux';
import { store } from '../store';
import { mockSearchResults, mockSpecies } from './mocks/mockSpecies';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('test Main', () => {
  test('should render Search button', () => {
    render(
      <Provider store={store}>
        <Main allSpeciesData={mockSearchResults} speciesData={mockSpecies} />
      </Provider>
    );
    const textOntheButton = screen.getByText('Search');

    expect(textOntheButton).toBeDefined();
  });
});
