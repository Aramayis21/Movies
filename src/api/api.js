import axios from "axios";
const API_KEY = "f36f23edf6e10fd2ddcf939916b1f67a"

const instanse = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
});

export const FilmsAPI = {
    getGenres(){
       return instanse.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    },
    getMovieByPage(pageNumber) {
        return instanse.get(`/discover/movie?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
    },
    getMovieById(id) {
        return instanse.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
    },
    getSearch(text) {
        return instanse.get(`/search/movie?api_key=${API_KEY}&query=${text}`)
    },
    getGenresById(genreId,pageNumber){
        return instanse.get(`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}&page=${pageNumber}`)
    }
}