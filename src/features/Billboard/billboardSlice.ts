import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/app/store';
import { getMovies } from '~/api/movie';

import { IMovie } from '~/features/common/types';
import { IBillboard, BillboardPayload } from './types';

interface BillboardState {
  [key: string]: {
    isLoading: boolean;
    isError: boolean;
    data: IMovie[];
  };
}

const initialState: BillboardState = {
  home: {
    isLoading: false,
    isError: false,
    data: []
  },
  movie: {
    isLoading: false,
    isError: false,
    data: []
  },
  tv: {
    isLoading: false,
    isError: false,
    data: []
  },
  latest: {
    isLoading: false,
    isError: false,
    data: []
  },
  myList: {
    isLoading: false,
    isError: false,
    data: []
  }
};

const billboardSlice = createSlice({
  name: 'billboard',
  initialState,
  reducers: {
    getBoardStart(state, action) {
      const { menuName } = action.payload;
      if (!state[menuName].isLoading) {
        state[menuName].isLoading = true;
      }
    },
    getBoardSuccess(state, action: PayloadAction<BillboardPayload>) {
      const { movies, menuName }: BillboardPayload = action.payload;
      if (state[menuName].isLoading) {
        state[menuName].data.push(...movies);
        state[menuName].isLoading = false;
      }
    },
    getBoardFailure(state, action) {
      const { menuName } = action.payload;
      state[menuName].isError = true;
    }
  }
});

export const fetchBillboard = ({
  menuName,
  resourcePath,
  page
}: IBillboard): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(getBoardStart({ menuName }));

    console.log(
      '/',

      menuName,
      resourcePath,
      page
    );

    const movies = await getMovies({ resourcePath, page });
    dispatch(getBoardSuccess({ menuName, movies }));
  } catch (error) {
    dispatch(getBoardFailure({ menuName }));
    console.log(error);
  }
};

const { actions, reducer } = billboardSlice;
export const { getBoardStart, getBoardSuccess, getBoardFailure } = actions;
export default reducer;
