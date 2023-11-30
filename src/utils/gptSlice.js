import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearch: false,
        gptMovies: null,
        gptMoviesName: null
    },
    reducers: {
        toggleGptSearchView: (state, action) =>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state, action) =>{
            state.gptMovies = action.payload

        },
        addGptMoviesName: (state, action) =>{
            state.gptMoviesName = action.payload
        },
        disableGptSearchView: (state) =>{
            state.showGptSearch = false
        }

    }
})

export const {toggleGptSearchView, addGptMovieResult, addGptMoviesName, disableGptSearchView} = gptSlice.actions;

export default gptSlice.reducer;