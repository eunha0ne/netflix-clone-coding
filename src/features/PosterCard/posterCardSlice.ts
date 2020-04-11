import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/app/store';
import { getMovies } from '~/api/movie';

import { IMovie, IFeature } from '~/app/types';
import { IPosterCard, PosterCardPayload } from './types';

interface PosterCardState extends IFeature {
  views: {
    [key: string]: IMovie[];
    home: IMovie[];
    movie: IMovie[];
    tv: IMovie[];
    latest: IMovie[];
    myList: IMovie[];
  };
}

const initialState: PosterCardState = {
  isLoading: false,
  isError: false,
  views: {
    home: [],
    movie: [],
    tv: [],
    latest: [],
    myList: []
  }
};

const posterCardSlice = createSlice({
  name: 'posterCard',
  initialState,
  reducers: {
    getPosterStart(state) {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    getPosterSuccess(state, action: PayloadAction<PosterCardPayload>) {
      if (state.isLoading) {
        const { movies, menuName }: PosterCardPayload = action.payload;
        state.views[menuName] = movies;
        state.isLoading = false;
      }
    },
    getPosterFailure(state) {
      state.isError = true;
    }
  }
});

export const fetchBillboard = ({
  menuName,
  resourcePath
}: IPosterCard): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(getPosterStart());
    const movies = await getMovies({ resourcePath });
    dispatch(getPosterSuccess({ menuName, movies }));
  } catch (error) {
    dispatch(getPosterFailure());
    console.log(error);
  }
};

const { actions, reducer } = posterCardSlice;
export const { getPosterStart, getPosterSuccess, getPosterFailure } = actions;
export default reducer;
