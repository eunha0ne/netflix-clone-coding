import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/features/store';
import { IMovie, IMovieKeys } from '~/features/movie/types';
import { getMovies } from '~/api/movie';

export interface IMoiveState {
  populars: IMovie[];
  isError: boolean;
}

const initialState: IMoiveState = {
  populars: [],
  isError: false
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setPopularMovies(state, { payload }) {
      state.populars = payload;
      state.isError = false;
    },
    setFailure(state) {
      state.isError = true;
    }
  }
});

export const { setPopularMovies, setFailure } = movieSlice.actions;

export const fetchPopularMovies = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const response = await getMovies();
    console.log('response', response);

    dispatch(setPopularMovies(response));
  } catch (error) {
    dispatch(setFailure());
  }
};

export default movieSlice.reducer;
