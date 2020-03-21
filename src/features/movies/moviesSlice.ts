import { createSlice } from '@reduxjs/toolkit';
import { AppThuck } from '~/features/rootReducer';
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

export function fetchMovies(): AppThuck {
  return async function(dispatch) {
    const nexflixShows = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=ko`;
    const movies = await axios.get(nexflixShows);

    try {
      dispatch(moviesActions.fetched({ movies: movies }));
    } catch (e) {
      //...
    } finally {
      //...
    }
  };
}

export default moviesSlice.reducer;
