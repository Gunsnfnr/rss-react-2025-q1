import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { store } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { Details } from '../components/Details/Details';
import { mockSpecies } from './mocks/mockSpecies';

describe('test SpeciesDetails', () => {
  test('should show loader message', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Details detailsData={mockSpecies} />
        </Provider>
      </BrowserRouter>
    );
    const speciesName = screen.getByText('Wookie');

    expect(speciesName).toBeDefined();
  });
});
