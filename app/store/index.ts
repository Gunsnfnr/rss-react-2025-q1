import { configureStore } from '@reduxjs/toolkit';
import { swSpeciesApi } from './apiSlice';
import cardsReducer from './cardsSlice';

export const store = configureStore({
  reducer: {
    swSpeciesApi: swSpeciesApi.reducer,
    speciesCards: cardsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swSpeciesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
