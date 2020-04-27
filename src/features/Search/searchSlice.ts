import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/app/store';
import { getSearchKeyword } from '~/api/movie';

import { IMovie, IFeature } from '~/app/types';
import Axios from 'axios';
// import { IBillboard, BillboardPayload } from './types';

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
    getSearchStart(state) {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    getSearchSuccess(state, { payload }: PayloadAction) {
      const { page, movies } = payload;
      if (state.isLoading) {
        state.page = page;
        state.data.push(...movies);
        state.isLoading = false;
      }
    },
    getSearchFailure(state) {
      state.isError = true;
    }
  }
});

export const fetchSearchResults = ({ mediaType, keyword }): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch(getSearchStart());
    const movies = await getSearchKeyword({ mediaType, keyword });
    dispatch(getSearchSuccess());
  } catch (error) {
    console.log(error);
  }
};

const { actions, reducer } = searchSlice;
export const { getSearchStart, getSearchSuccess } = actions;
export default reducer;
