export const fetchPathGenerator = (query, page) =>
  `https://api.themoviedb.org/3/search/movie?api_key=6e09219c6174d28a7f04d7d8467efd6f&language=en-US&query=${query}&page=${page}&include_adult=false`;

export const imgPathGenerator = posterPath =>
  posterPath
    ? `https://image.tmdb.org/t/p/w500/${posterPath}`
    : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80';
