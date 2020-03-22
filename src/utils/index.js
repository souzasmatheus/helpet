export const fetchPathGenerator = (query, page) =>
  `https://api.themoviedb.org/3/search/movie?api_key=6e09219c6174d28a7f04d7d8467efd6f&language=en-US&query=${query}&page=${page}&include_adult=false`;

export const imgPathGenerator = posterPath =>
  `https://image.tmdb.org/t/p/w500/${posterPath}`;
