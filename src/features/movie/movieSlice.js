import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

// Redux consists of reducers, actions, and state. 
// Actions are for getting and setting the data.
// Reducers are what takes the actions and changes the state. Actions call reducers, and then reducers call State. 
// UI has some events, event handler dispatches and talk to the store. The reducer in the store changes the state and feedbacked to the app.
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
        state.movies = action.payload;
    }
  }
});

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;