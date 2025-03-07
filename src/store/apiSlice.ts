import { SearchResults, Species } from '../types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_API_URL = 'https://swapi.dev/api/species/';
export interface AllSpeciesQueryArgument {
  request: string;
  page: number;
}
export interface speciesQueryArgument {
  speciesId: string;
}

const swSpeciesApi = createApi({
  reducerPath: 'swSpeciesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getAllSpecies: builder.query<SearchResults, AllSpeciesQueryArgument>({
      query: (params: AllSpeciesQueryArgument) =>
        `?search=${params.request}&page=${params.page ?? 1}`,
    }),
    getSpecies: builder.query<Species, speciesQueryArgument>({
      query: (params: speciesQueryArgument) => `${params.speciesId}/`,
    }),
  }),
});

export { swSpeciesApi };
export const { useGetAllSpeciesQuery, useGetSpeciesQuery } = swSpeciesApi;
