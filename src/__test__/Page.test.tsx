import { describe, test, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { mockSearchResults, mockSpecies } from './mocks/mockSpecies';
import { ThemeProvider } from '../context/themeContext';
import { Provider } from 'react-redux';
import { store } from '../store';
import Page from '../app/page/[pagenumber]/page';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  useSearchParams: () => ({
    get: vi.fn(() => null),
  }),
  useParams: () => ({
    pagenumber: '1',
  }),
}));

beforeEach(() => {
  vi.clearAllMocks();
  global.fetch = vi.fn((url) =>
    Promise.resolve({
      json: () => Promise.resolve(url.includes('/species/2/') ? mockSpecies : mockSearchResults),
    } as Response)
  );
});

describe('test Page component', () => {
  test('should render correctly with species data', async () => {
    render(
      <ThemeProvider>
        <Provider store={store}>
          <Page />
        </Provider>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    expect(screen.getByText('Wookie')).toBeInTheDocument();
  });
});
