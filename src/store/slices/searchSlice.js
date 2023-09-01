import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/api";

export const fetchSearch = createAsyncThunk(
    'fetchSearch',
    async (text) => {
        const response = await FilmsAPI.getSearch(text);

        const data = await response.data.results;

        return data
    }
)
const searchSlice = createSlice({
    name : 'searchSlice',
    initialState : {
        text : '',
        searchFilms : []
    },
    reducers : {
        searchText(state, action){
            state.text = action.payload
        }
    },
    extraReducers : {
        [fetchSearch.fulfilled] : (state, action) => {
            state.searchFilms = action.payload
        }
    }
})

export const {searchText} = searchSlice.actions
export default searchSlice.reducer