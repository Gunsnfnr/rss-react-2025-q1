import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Main } from '../components/Main/Main';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../store';
import { mockSearchResults, mockSpecies } from './mocks/mockSpecies';

describe('test Main', () => {
  test('should render Search button', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Main data={mockSearchResults} detailsData={mockSpecies} />
        </Provider>
      </MemoryRouter>
    );
    const textOntheButton = screen.getByText('Search');

    expect(textOntheButton).toBeDefined();
  });
});
