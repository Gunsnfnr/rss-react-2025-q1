import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { store } from '../store';
import { Provider } from 'react-redux';
import { Details } from '../components/Details/Details';
import { mockSpecies } from './mocks/mockSpecies';

vi.mock('next/navigation', () => ({
  useRouter: () => ({}),
  useSearchParams: () => ({
    get: vi.fn(),
  }),
  useParams: () => ({}),
}));

describe('test SpeciesDetails', () => {
  test('should show loader message', () => {
    render(
      <Provider store={store}>
        <Details speciesData={mockSpecies} />
      </Provider>
    );
    const classification = screen.getByText('mammal');

    expect(classification).toBeDefined();
  });
});
