import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/app/store';
import { getMovies } from '~/api/movie';

import { IMovie } from '~/app/types';
import { IBillboard, BillboardPayload } from './types';

interface BillboardState {
  [key: string]: {
    page: number;
    isOpenDetail: boolean;
    isLoading: boolean;
    isError: boolean;
    data: IMovie[];
  };
}

const initialState: BillboardState = {
  home: {
    page: 1,
    isOpenDetail: false,
    isLoading: false,
    isError: false,
    data: []
  },
  movie: {
    isOpenDetail: false,
    page: 1,
    isLoading: false,
    isError: false,
    data: []
  },
  tv: {
    page: 1,
    isOpenDetail: false,
    isLoading: false,
    isError: false,
    data: []
  },
  latest: {
    page: 1,
    isOpenDetail: false,
    isLoading: false,
    isError: false,
    data: []
  },
  myList: {
    page: 1,
    isOpenDetail: false,
    isLoading: false,
    isError: false,
    data: []
  }
};

const billboardSlice = createSlice({
  name: 'billboard',
  initialState,
  reducers: {
    getBoardStart(state, { payload }: PayloadAction<{ menuName: string }>) {
      const { menuName } = payload;
      const isLoading = state[menuName].isLoading;
      if (!isLoading) {
        state[menuName].isLoading = true;
      }
    },
    getBoardSuccess(state, { payload }: PayloadAction<BillboardPayload>) {
      const { menuName, page, movies } = payload;
      const isLoading = state[menuName].isLoading;
      if (isLoading) {
        state[menuName].page = page;
        state[menuName].data.push(...movies);
        state[menuName].isLoading = false;
      }
    },
    getBoardFailure(state, { payload }: PayloadAction<{ menuName: string }>) {
      const { menuName } = payload;
      state[menuName].isError = true;
    }
  }
});

export const fetchBillboard = ({
  menuName,
  resourcePath,
  page = 1
}: IBillboard): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(getBoardStart({ menuName }));
    const movies = await getMovies({ resourcePath, page });
    dispatch(getBoardSuccess({ menuName, movies, page }));
  } catch (error) {
    dispatch(getBoardFailure({ menuName }));
    console.log(error);
  }
};

const { actions, reducer } = billboardSlice;
export const { getBoardStart, getBoardSuccess, getBoardFailure } = actions;
export default reducer;
