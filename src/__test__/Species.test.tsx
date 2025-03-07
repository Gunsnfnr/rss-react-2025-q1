import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Results } from '../components/Results/Results';
import { mockSpecies } from './mocks/mockSpecies';
import { Provider } from 'react-redux';
import { store } from '../store';

vi.mock('next/navigation', () => ({
  useRouter: () => ({}),
  useSearchParams: () => ({
    get: vi.fn(),
  }),
  useParams: () => ({}),
}));

describe('test Species', () => {
  test('should render species name', () => {
    render(
      <Provider store={store}>
        <Results searchResults={[mockSpecies]} />,
      </Provider>
    );

    const text = screen.getByText('Wookie');
    expect(text).toBeDefined();
  });
});
