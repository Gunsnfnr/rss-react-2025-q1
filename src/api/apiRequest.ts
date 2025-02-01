const API = 'https://swapi.dev/api/people/';

export const getCharacters = async (searchString: string) => {
  const data = await fetch(`${API}?search=${searchString}`)
    .then((resp: Response) => {
      console.log('resp.status: ', resp.status);
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
