import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/api";

export const fetchFilm = createAsyncThunk(
    'fetchFilm',
    async (id) => {
        const response = await FilmsAPI.getMovieById(id);

        const data = await response.data;

        return data
    }
)
const filmsSlice = createSlice({
    name : 'filmsSlice',
    initialState : {
        filmPage : {}
    },
    reducers : {

    },
    extraReducers : {
        [fetchFilm.fulfilled] : (state, action) => {
            state.filmPage = action.payload
        }
    }
})

export default filmsSlice.reducer