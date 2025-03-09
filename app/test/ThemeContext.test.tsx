import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../context/themeContext';
import { Searcher } from '../components/Searcher/Searcher';

beforeEach(() => {
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
    if (key === 'gunsnfnr.sw-theme') return 'dark';
    return null;
  });
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {});
});

describe('test theme Switching', () => {
  test('should change the theme when the button is clicked', () => {
    render(
      <ThemeProvider>
        <Searcher searchTermSend={vi.fn()} />
      </ThemeProvider>
    );

    const themeButton = screen.getByText('Theme: dark');
    expect(themeButton).toBeInTheDocument();

    expect(screen.getByText('Theme: dark')).toBeInTheDocument();

    fireEvent.click(themeButton);
    expect(screen.getByText('Theme: light')).toBeInTheDocument();

    fireEvent.click(themeButton);
    expect(screen.getByText('Theme: dark')).toBeInTheDocument();
  });
});
