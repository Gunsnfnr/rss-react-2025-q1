// import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { SearchResults, Species } from '../types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_API_URL = 'https://swapi.dev/api/species/';
export interface QueryArgument {
  request: string;
  page: number;
}

const swSpeciesApi = createApi({
  reducerPath: 'swSpeciesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getAllSpecies: builder.query<SearchResults, QueryArgument>({
      query: (params: QueryArgument) => `?search=${params.request}&page=${params.page ?? 1}`,
    }),
    getSpecies: builder.query<Species, string | undefined>({
      query: (speciesId: string | undefined) => `${speciesId}/`,
    }),
  }),
});

export { swSpeciesApi };
export const { useGetAllSpeciesQuery } = swSpeciesApi;
