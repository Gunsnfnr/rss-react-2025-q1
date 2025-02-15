import { Species } from '../types';

const BASE_API_URL = 'https://swapi.dev/api/species/';
const BASE_IMAGE_API_URL = 'https://starwars-visualguide.com/assets/img/species/';

export const getAllSpecies = async (searchString: string, pageNumber: number) => {
  const data = await fetch(`${BASE_API_URL}?search=${searchString}&page=${pageNumber}`)
    .then((resp: Response) => {
      if (resp.status === 200) {
        return resp.json();
      } else if (resp.status === 404) {
        return { results: [] };
      } else {
        throw new Error(`Something went wrong. Response status ` + resp.status);
      }
    })
    .catch((error) => {
      throw new Error(`Something went wrong. Error text:\n${error}`);
    });
  return data;
};

export const getSpeciesImage = (url: string) => {
  const id = (/\/\d{1,}\//.exec(url) as unknown as string)[0].replace(/\//g, '');
  return `${BASE_IMAGE_API_URL}${id}.jpg`;
};

export const getSpecies: (id: string) => Promise<Species> = async (id) => {
  const data: Species = await fetch(`${BASE_API_URL}${id}/`)
    .then((resp: Response) => {
      if (resp.status === 200) {
        return resp.json();
      } else {
        throw new Error(`Something went wrong.`);
      }
    })
    .catch((error) => {
      throw new Error(`Something went wrong. Error text:\n${error}`);
    });
  return data;
};
