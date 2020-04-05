import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/app/store';
import { getPopularMovies } from '~/api/movie';
import { IPopular, IMovie } from './types';

const initialState: IPopular = {
  movies: [],
  populars: [],
  currPopulars: [],
  isError: false,
  loading: 'idle',
  pageCount: 0
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getStartPopulars(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    getSuccessPopulars(state, action: PayloadAction<IMovie[]>) {
      if (state.loading === 'pending') {
        state.loading = 'sucess';
        state.movies = action.payload;

        console.log(state.movies);
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
    const populars = await getPopularMovies();
    dispatch(getSuccessPopulars(populars));
  } catch (error) {
    throw error;
  }
};

const { actions, reducer } = movieSlice;
export const { getStartPopulars, getSuccessPopulars } = actions;
export default reducer;
