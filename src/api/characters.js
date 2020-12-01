export const getCharacters = async (page) => {
  const response = await window.fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=4f52ab847028a663b243fdee576e6990&page=${page}`
    //`https://rickandmortyapi.com/api/character/?page=${page}`
  );
  return await response.json();
};
