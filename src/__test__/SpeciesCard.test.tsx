import { describe, test, expect } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import { store } from '../store';
import { Provider } from 'react-redux';
import { mockSpecies } from './mocks/mockSpecies';
import { SpeciesCard } from '../components/SpeciesCard/SpeciesCard';

vi.mock('next/router', () => vi.importActual('next-router-mock'));
describe('test CharacterCard', () => {
  const speciesName = 'Wookie';

  test('should show species card', () => {
    render(
      <Provider store={store}>
        <SpeciesCard species={mockSpecies} key={speciesName} />
      </Provider>
    );

    expect(screen.getByText(speciesName)).toBeInTheDocument();
  });

  test('should check the checkbox when clicked', () => {
    render(
      <Provider store={store}>
        <SpeciesCard species={mockSpecies} key={speciesName} />
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
