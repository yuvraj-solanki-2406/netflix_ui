import {
    configureStore,
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
import axios from "axios"
import { TMDB_kEY, TMDB_BASE_URL } from "../utils/env"

const initialState = {
    movies:[],
    generesLoaded: false,
    generes: []
}

export const getGenres = createAsyncThunk("netflix/genres", async()=>{
    const {data} = await fetch.get(
        `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_kEY}`
    ).then((datas)=>{
        console.log("kd",data)
    })
})

const NetflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled,(state,action)=>{
            state.generes = action.payload;
            state.generesLoaded = true
        })
    },
});

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer,
    }
})