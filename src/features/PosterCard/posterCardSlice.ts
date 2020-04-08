import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/app/store';
import { getMovies } from '~/api/movie';

import { IMovie, IFeature } from '~/features/common/types';
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
    getBoardStart(state) {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    getBoardSuccess(state, action: PayloadAction<PosterCardPayload>) {
      if (state.isLoading) {
        const { movies, viewName }: PosterCardPayload = action.payload;
        state.views[viewName] = movies;
        state.isLoading = false;
      }
    },
    getBoardFailure(state) {
      state.isError = true;
    }
  }
});

export const fetchBillboard = ({
  viewName,
  query
}: IPosterCard): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(getBoardStart());
    const movies = await getMovies(query);
    dispatch(getBoardSuccess({ viewName, movies }));
  } catch (error) {
    dispatch(getBoardFailure());
    console.log(error);
  }
};

const { actions, reducer } = posterCardSlice;
export const { getBoardStart, getBoardSuccess, getBoardFailure } = actions;
export default reducer;
