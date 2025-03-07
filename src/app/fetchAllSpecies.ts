import { SearchResults } from '../types';

export interface QueryParams {
  search: string;
  pagenumber: string;
}

export const fetchAllSpecies = async (searchParams: QueryParams) => {
  const allSpeciesData = await fetch(
    `https://swapi.dev/api/species/?search=${searchParams.search ?? ''}
&page=${searchParams.pagenumber ?? 1}`
  )
    .then((res) => res.json())
    .then((data: SearchResults) => data);

  return allSpeciesData;
};
