import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Results } from '../components/Results/Results';
import { mockSpecies } from './mocks/mockSpecies';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('test Species', () => {
  test('should render species name', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Results searchResults={[mockSpecies]} error={undefined} />,
        </Provider>
      </MemoryRouter>
    );

    const text = screen.getByText('Wookie');
    expect(text).toBeDefined();
  });
});
