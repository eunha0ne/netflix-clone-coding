import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/features/store';
import { IMovie } from '~/features/movie/types';
import { getPopularMovies } from '~/api/movie';

export interface IMoiveState {
  populars: IMovie[];
  currPopulars: IMovie[];
  isError: boolean;
}

const initialState: IMoiveState = {
  populars: [],
  currPopulars: [],
  isError: false
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setPopularMovies(state, { payload }) {
      state.populars = payload;
      state.isError = false;
    }
  }
});

export const { setPopularMovies } = movieSlice.actions;

export const fetchPopularMovies = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const response = await getPopularMovies();
    dispatch(setPopularMovies(response));
  } catch (error) {
    throw error;
  }
};

export default movieSlice.reducer;
