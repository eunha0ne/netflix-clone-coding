import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/features/store';
import { Movie } from '~/features/movies/types';
import getMovies from '~/api/getMovies';

const initialState: Movie[] = [];

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<Movie>) {
      console.log('action', action);
      state.push(action.payload);
    }
  }
});

// export const { fetched } = moviesSlice.actions;

export const addMovie = (): AppThunk => async (dispatch: AppDispatch) => {
  console.log('/');
  const result = await getMovies();

  dispatch(moviesSlice.actions.addMovie(result));
};

export default moviesSlice.reducer;
