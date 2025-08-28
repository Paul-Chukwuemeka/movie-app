import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.TMDB_API_KEY,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
    include_adult: false,
  },
});

tmdb.interceptors.response.use((response) => {
  try {
    if (response.config.url.includes("/movie/popular") || response.config.url.includes("/tv/popular")) {
      response.data.results = response.data.results.slice(0, 10);
    }
    return response;
  } catch (error) {
    return error;
  }
});

export default tmdb;
