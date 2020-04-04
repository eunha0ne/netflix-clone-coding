import { createSlice } from '@reduxjs/toolkit';
import { getPopularMovies } from '~/api/movie';
import { AppThunk, AppDispatch } from '~/app/store';
import { IMoiveState } from './types';

const initialState: IMoiveState = {
  movies: [],
  populars: [],
  currPopulars: [],
  isError: false,
  loading: 'idle'
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    moviesLoading(state, action) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    moviesReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.movies = action.payload;
      }
    },

    setPopularMovies(state, { payload }) {
      state.populars = payload;
      state.isError = false;
    }
  }
});

export const fetchPopularMovies = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const response = await getPopularMovies();
    dispatch(moviesReceived(response));
  } catch (error) {
    throw error;
  }
};

const { actions, reducer } = movieSlice;
export const { moviesLoading, moviesReceived } = actions;
export default reducer;
