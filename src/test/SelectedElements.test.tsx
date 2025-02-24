import { vi, describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { SelectedCards } from '../components/SelectedCards/SelectedCards';
import mockStore from './mocks/mockStore';

URL.createObjectURL = vi.fn();

describe('test SelectedCards', () => {
  test('should render text on the button', () => {
    render(
      <MemoryRouter>
        <Provider store={mockStore}>
          <SelectedCards />
        </Provider>
      </MemoryRouter>
    );

    const button = screen.getByText('Unselect all');
    expect(button).toBeDefined();
  });
});
