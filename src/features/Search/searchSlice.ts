import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/app/store';
import { getSearchKeyword } from '~/api/movie';

import { IMovie, IFeature } from '~/app/types';
import { ISearch, ISearchPayload, IPagePayload } from './types';

interface SearchState extends IFeature {
  page: number;
  movies: IMovie[];
  previousPage: string;
  pageGenre: string;
}

const initialState: SearchState = {
  page: 1,
  isLoading: false,
  isError: false,
  previousPage: '/browse',
  pageGenre: 'movie',
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
    getSearchSuccess(state, { payload }: PayloadAction<ISearchPayload>) {
      const { movies } = payload;
      if (state.isLoading) {
        state.movies = movies;
        state.isLoading = false;
      }
    },
    getSearchFailure(state) {
      state.isError = true;
    },
    setLatestPage(state, { payload }: PayloadAction<IPagePayload>) {
      const { previousPage, pageGenre } = payload;
      state.previousPage = previousPage;
      state.pageGenre = pageGenre;
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
    dispatch(getSearchFailure());
    console.log(error);
  }
};

const { actions, reducer } = searchSlice;
export const {
  clearSearch,
  getSearchStart,
  getSearchSuccess,
  getSearchFailure,
  setLatestPage
} = actions;
export default reducer;
