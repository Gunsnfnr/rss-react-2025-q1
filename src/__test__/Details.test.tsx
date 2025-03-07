import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Details } from '../components/Details/Details';
import { Provider } from 'react-redux';
import { store } from '../store';
import { mockSpecies } from './mocks/mockSpecies';

vi.mock('next/navigation', () => ({
  useRouter: () => ({}),
  useSearchParams: () => ({
    get: vi.fn(),
  }),
  useParams: () => ({}),
}));

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
