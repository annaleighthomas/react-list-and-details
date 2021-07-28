const URL = 'https://rickandmortyapi.com/api/character';

export async function getCharacter(id) {
  const res = await fetch(`${URL}/${id}`);
  const json = await res.json();
  return json;
}


export const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const json = await res.json();

  return json.results;
};
