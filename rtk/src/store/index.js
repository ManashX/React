import {configureStore, createSlice} from '@reduxjs/toolkit';


const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action){
            state.push(action.payload);
        },
        removeSong(state, action){
            //action.payload === string, the song we want to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        reset(state, action){
            return [];
        },
        
    },
    extraReducers(builder){
        // builder object  tell our combined reducer to watch about some additional action types.
        builder.addCase('movie/reset', (state, action) =>{
            return [];
        });
    }
});
const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload);
        },
        removeMovie(state, action){
            //action.payload === string, the song we want to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        reset(state, action){
            console.log(action);
            return [];
        },
    }
});

const store = configureStore({
    reducer : {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
});


export {store};
export const {addSong, removeSong} = songsSlice.actions;
export const {addMovie, removeMovie, reset} = moviesSlice.actions;