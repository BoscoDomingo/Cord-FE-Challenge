import axios from 'axios';

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

// const API_KEY = process.env.MOVIES_DB_API_KEY || "991724e209b5167debbf1d8adaf43bb9"; // This would be the way to do it in prod
// const BASE_URL = process.env.MOVIES_DB_BASE_URL || "https://api.themoviedb.org/3";

const API_KEY = "991724e209b5167debbf1d8adaf43bb9"; // I hardcoded them for simplicity
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query, year) => {
    if (query === "") {
        console.error("Query must be provided");
        return {};
    }
    try {
        return (await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}${query ? `&query=${query}` : ""}${year ? `&year=${year}` : ""}`)).data
    } catch (error) { // This error handling can be greatly improved
        console.error(error);
    }

}

export const fetchPopularMovies = async () => {
    try {
        return (await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)).data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchMovieGenres = async () => {
    try {
        return (await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)).data.genres;
    } catch (error) {
        console.error(error);
    }
}