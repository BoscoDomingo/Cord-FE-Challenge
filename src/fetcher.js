import axios from 'axios';

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

// const API_KEY = process.env.MOVIES_DB_API_KEY || "991724e209b5167debbf1d8adaf43bb9"; // This would be the way to do it in prod
// const BASE_URL = process.env.MOVIES_DB_BASE_URL || "https://api.themoviedb.org/3";

const API_KEY = "991724e209b5167debbf1d8adaf43bb9"; // I will hardcode them for simplicity
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query, year) => {
    if (query === "") {
        console.error("Query must be provided");
        return {};
    }
    return await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}${query ? `&query=${query}` : ""}${year ? `&year=${year}` : ""}`)
        .then(res => res.data)
        .catch(err => console.error(err));
}

export const fetchPopularMovies = async () => {
    return await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
        .then(res => res.data)
        .catch(err => console.error(err));
}

export const fetchMovieGenres = async () => {
    return await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
        .then(res => res.data.genres)
        .catch(err => console.error(err));
}