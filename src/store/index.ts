import { configureStore } from '@reduxjs/toolkit';
import { swSpeciesApi } from './apiSlice';

export const store = configureStore({
  reducer: {
    swSpeciesApi: swSpeciesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swSpeciesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
