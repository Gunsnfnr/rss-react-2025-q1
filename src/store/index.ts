import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';

export const store = configureStore({
  reducer: {
    speciesCards: cardsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
