import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Species } from '../types';

export interface SelectedSpeciesCardsState {
  selectedCards: Species[];
}
const initialState: SelectedSpeciesCardsState = {
  selectedCards: [],
};

export const cardsSlice = createSlice({
  name: 'speciesCards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Species>) => {
      state.selectedCards = [...state.selectedCards, action.payload];
    },
    removeCard: (state, action: PayloadAction<Species>) => {
      state.selectedCards = state.selectedCards.filter((card) => card.name !== action.payload.name);
    },
    removeAllCards: (state) => {
      state.selectedCards.length = 0;
    },
  },
});

export const { addCard, removeCard, removeAllCards } = cardsSlice.actions;

export default cardsSlice.reducer;
