export const getDetailMovie = async (id) => {
  const response = await window.fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4f52ab847028a663b243fdee576e6990&language=en-US`
  );
  const data = await response.json();

  return data;
};
