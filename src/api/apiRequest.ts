const BASE_API_URL = 'https://swapi.dev/api/species/';
const BASE_IMAGE_API_URL = 'https://starwars-visualguide.com/assets/img/species/';

export const getSpecies = async (searchString: string) => {
  const data = await fetch(`${BASE_API_URL}?search=${searchString}`)
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
  console.log('data: ', data.results);
  return data;
};

export const getSpeciesImage = (url: string) => {
  const id = (/\/\d{1,}\//.exec(url) as unknown as string)[0].replace(/\//g, '');
  return `${BASE_IMAGE_API_URL}${id}.jpg`;
};
