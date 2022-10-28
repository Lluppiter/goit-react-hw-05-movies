import axios from 'axios';

const API_KEY = 'e15863a6aae97b6859d248b0c6515614';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchApi = () => {
  return axios('trending/movie/day', { params: { api_key: API_KEY } });
};

export const fetchMoviesByQuery = query => {
  return axios('search/movie', { params: { api_key: API_KEY, query } });
};

export const fetchMovieById = movieId => {
  return axios(`movie/${movieId}`, { params: { api_key: API_KEY } });
};

export const fetchMovieByIdForCredits = movieId => {
  return axios(`movie/${movieId}/credits`, { params: { api_key: API_KEY } });
};

export const fetchMovieByIdForReviews = movieId => {
  return axios(`movie/${movieId}/reviews`, { params: { api_key: API_KEY } });
};
