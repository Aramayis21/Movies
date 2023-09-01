import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/api";


export const fetchMovies = createAsyncThunk(
    'fetchMovies',
    async (pageNumber) => {
        const response = await FilmsAPI.getMovieByPage(pageNumber);

        const data = await response.data.results

        return data
    }
)


export const fetchGenresId = createAsyncThunk(
    'fetchGenresId',
    async(genresId,pageNumber) => {
        const response = await FilmsAPI.getGenresById(genresId,pageNumber)
        const data = await response.data.results
        return data
    }
)

const movieSlice = createSlice({
    name : 'movieSlice',
    initialState : {
        genresId : null,
        movies : [],
        pageNumber : 1,
        isLoading : false
    },
    reducers : {
        changePage : (state, action) => {
            state.pageNumber = state.pageNumber + 1
        }
    },
    extraReducers : {
        [fetchMovies.pending] : (state, action) => {
            state.isLoading = true
        },
        [fetchMovies.fulfilled] : (state, action) => {
            state.movies = action.payload
            state.isLoading = false
        },
        [fetchGenresId.fulfilled] : (state,action) => {
            state.movies = action.payload
            state.genresId = action.payload.genresId
            state.pageNumber = 1
        }
    }
})

export const {changePage} = movieSlice.actions
export default movieSlice.reducer