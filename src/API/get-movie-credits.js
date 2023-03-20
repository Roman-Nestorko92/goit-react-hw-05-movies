async function getMovieCredits(movieId) {
  const key = 'e37afbe8681f4152ae6f2e33bec3a5b8';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const filter = `?api_key=${key}&language=en-US`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default getMovieCredits;
