import { describe, test, expect } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import { store } from '../store';
import { Provider } from 'react-redux';
import { mockSpecies } from './mocks/mockSpecies';
import { MemoryRouter } from 'react-router';
import { SpeciesCard } from '../components/SpeciesCard/SpeciesCard';

describe('test CharacterCard', () => {
  const speciesName = 'Wookie';

  test('should show species card', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SpeciesCard species={mockSpecies} key={speciesName} />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(speciesName)).toBeInTheDocument();
  });

  test('should check the checkbox when clicked', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SpeciesCard species={mockSpecies} key={speciesName} />
        </Provider>
      </MemoryRouter>
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
