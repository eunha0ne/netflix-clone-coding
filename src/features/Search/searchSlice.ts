import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/app/store';
import { getSearchKeyword } from '~/api/movie';

import { IMovie, IFeature } from '~/app/types';
import { ISearch, searchPayload } from './types';

interface SearchState extends IFeature {
  page: number;
  movies: IMovie[];
}

const initialState: SearchState = {
  page: 1,
  isLoading: false,
  isError: false,
  movies: []
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearSearch(state) {
      state.movies = [];
    },
    getSearchStart(state) {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    getSearchSuccess(state, { payload }: PayloadAction<searchPayload>) {
      const { movies } = payload;
      if (state.isLoading) {
        console.log('movies', movies);

        state.movies = movies;
        state.isLoading = false;
      }
    },
    getSearchFailure(state) {
      state.isError = true;
    }
  }
});

export const fetchSearchResults = ({ keyword }: ISearch): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch(clearSearch());
    dispatch(getSearchStart());
    const movies = await getSearchKeyword({ keyword });
    dispatch(getSearchSuccess({ movies }));
  } catch (error) {
    console.log(error);
  }
};

const { actions, reducer } = searchSlice;
export const { clearSearch, getSearchStart, getSearchSuccess } = actions;
export default reducer;
