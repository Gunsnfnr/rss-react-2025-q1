import { configureStore, createSlice } from '@reduxjs/toolkit';
import { type Species } from '../../types';
import { mockSpecies } from './mockSpecies';

const initialState: { selectedCards: Species[] } = { selectedCards: [mockSpecies] };

const selectedCardsReducer = createSlice({
  name: 'speciesCards',
  initialState,
  reducers: {},
});

const mockStore = configureStore({
  reducer: {
    speciesCards: selectedCardsReducer.reducer,
  },
});

export default mockStore;
