import { vi, describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SelectedCards } from '../components/SelectedCards/SelectedCards';
import mockStore from './mocks/mockStore';

URL.createObjectURL = vi.fn();
vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('test SelectedCards', () => {
  test('should render text on the button', () => {
    render(
      <Provider store={mockStore}>
        <SelectedCards />
      </Provider>
    );

    const button = screen.getByText('Unselect all');
    expect(button).toBeDefined();
  });
});
