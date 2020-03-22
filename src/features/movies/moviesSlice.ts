import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '~/features/store';
import axios from 'axios';
import { BASE_URL, API_KEY } from '~/constants';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: []
  },
  reducers: {
    fetched(state, action) {
      const { movies } = action.payload;

      state.movies = movies;
    }
  }
});

export const moviesActions = moviesSlice.actions;

export function fetchMovies(): AppThunk {
  return async function(dispatch) {
    try {
      const nexflixShows = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=ko`;
      const movies = await axios.get(nexflixShows);
      dispatch(moviesActions.fetched({ movies: movies }));
    } catch (e) {
      //...
    } finally {
      //...
    }
  };
}

export default moviesSlice.reducer;
