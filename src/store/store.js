import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./slices/genresSlice";
import movieSlice from "./slices/movieSlice";
import filmSlice from "./slices/filmSlice";
import searchSlice from './slices/searchSlice';

const store = configureStore({
    reducer : {
        genresData : genresSlice,
        moviesData : movieSlice,
        filmData : filmSlice,
        searchData : searchSlice
    }
})

export default store;