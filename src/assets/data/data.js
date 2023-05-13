const API_KEY = "375b53f7c31dd1ed7e388db6bf583b15";

export const baseImgUrl = "https://image.tmdb.org/t/p/w500";

export const links = [
  {
    title: "Trending This Week",
    url: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  },
  {
    title: "Trending Movies",
    url: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=3`,
  },
  {
    title: "Trending TV Shows",
    url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&page=2`,
  },
  {
    title: "Popular Movies",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
  },
  {
    title: "Comedy Movies",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
  },
];
