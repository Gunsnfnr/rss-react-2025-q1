import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { mockSearchResults, mockSpecies } from './mocks/mockSpecies';
import { ThemeProvider } from '../context/themeContext';
import Home from '../pages/page/[pagenumber]';
import { Provider } from 'react-redux';
import { store } from '../store';

vi.mock('next/router', () => {
  const push = vi.fn();
  const events = {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  };
  return {
    __esModule: true,
    default: { push, events, query: { search: 'wo' } },
    useRouter: () => ({ push, query: { search: 'wo' } }),
  };
});

global.fetch = vi.fn();

describe('test Home page', () => {
  test('should render correctly with species data', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: () => Promise.resolve(mockSearchResults),
    } as Response);

    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: () => Promise.resolve(mockSpecies),
    } as Response);

    const props = {
      allSpeciesData: mockSearchResults,
      speciesData: mockSpecies,
    };

    render(
      <ThemeProvider>
        <Provider store={store}>
          <Home {...props} />
        </Provider>
      </ThemeProvider>
    );

    expect(screen.getByText('mammal')).toBeInTheDocument();
  });
});
