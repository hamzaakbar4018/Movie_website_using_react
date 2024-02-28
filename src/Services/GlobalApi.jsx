import axios from 'axios';

const MovieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "a13155443d68526f4929fd4e3a23b2dc";

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie';

export const getTrendingVideos = () => axios.get(`${MovieBaseUrl}/discover/movie?api_key=${api_key}`);
export const getMovieByGenreId = (id) => axios.get(`${movieByGenreBaseURL}?api_key=${api_key}&with_genres=${id}`);
