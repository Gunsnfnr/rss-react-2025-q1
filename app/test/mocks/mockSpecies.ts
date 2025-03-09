import { type SearchResults, type Species } from '../../types';

export const mockSpecies: Species = {
  name: 'Wookie',
  classification: 'mammal',
  average_height: '210',
  eye_colors: 'blue, green, yellow, brown, golden, red',
  hair_colors: 'black, brown',
  skin_colors: 'gray',
  average_lifespan: '400',
  language: 'Shyriiwook',
  url: 'https://swapi.dev/api/species/3/',
};

export const mockSearchResults: SearchResults = {
  results: [mockSpecies],
  next: 'https://swapi.dev/api/species/?search=a&page=2',
};
