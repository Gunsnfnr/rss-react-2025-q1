import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Details } from '../components/Details/Details';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../store';
import { mockSpecies } from './mocks/mockSpecies';

vi.mock('../store/apiSlice', async (importOriginal) => {
  const actual: object = await importOriginal();
  return {
    ...actual,
    useGetSpeciesQuery: () => {
      return {
        data: mockSpecies,
        error: null,
        isFetching: false,
        refetch: vi.fn(),
      };
    },
  };
});

describe('test Details', () => {
  test('should show loader message', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Details />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText(mockSpecies.name)).toBeInTheDocument();
  });
});
