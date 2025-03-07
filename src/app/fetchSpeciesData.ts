import { Species } from '../types';

export const fetchSpecies = async (id: string) => {
  const speciesData = await fetch(`https://swapi.dev/api/species/${id}`)
    .then((res) => res.json())
    .then((data: Species) => data);

  return speciesData;
};
