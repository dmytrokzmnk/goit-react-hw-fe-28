import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getTrending = async () => {
  return await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
};

export const getDetails = async (id) => {
  return await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
};
export const getCast = async (id) => {
  return await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
};
export const getReviews = async (id) => {
  return await axios.get(
    `/movie/${id}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};
export const getMoviesList = async (query) => {
  return await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false`
  );
};
