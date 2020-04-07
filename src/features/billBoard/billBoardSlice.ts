import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/app/store';
import { getMovies } from '~/api/movie';

import { IMovie, IBoardProps } from './types';

interface IBoardState {
  isLoading: boolean;
  isError: boolean;
  views: {
    [key: string]: IMovie[];
    home: IMovie[];
    movie: IMovie[];
    tv: IMovie[];
    latest: IMovie[];
    myList: IMovie[];
  };
}

interface IBoardPayload {
  viewName: string;
  movies: IMovie[];
}

const initialState: IBoardState = {
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

const billBoardSlice = createSlice({
  name: 'billBoard',
  initialState,
  reducers: {
    getBoardStart(state) {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    getBoardSuccess(state, action: PayloadAction<IBoardPayload>) {
      if (state.isLoading) {
        const { movies, viewName }: IBoardPayload = action.payload;
        state.views[viewName] = movies;
        state.isLoading = false;
      }
    },
    getBoardFailure(state) {
      state.isError = true;
    }
  }
});

export const fetchBillBoard = ({
  viewName,
  genre,
  query
}: IBoardProps): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(getBoardStart());
    const movies = await getMovies(query);
    dispatch(getBoardSuccess({ viewName, movies }));
  } catch (error) {
    dispatch(getBoardFailure());
    throw error;
  }
};

const { actions, reducer } = billBoardSlice;
export const { getBoardStart, getBoardSuccess, getBoardFailure } = actions;
export default reducer;
