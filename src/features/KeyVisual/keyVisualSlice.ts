import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/app/store';
import { getMovie } from '~/api/movie';

import { IMovie, IFeature } from '~/features/common/types';
import { IKeyVisual, KeyVisualPayload } from './types';

export interface KeyVisualState extends IFeature {
  views: {
    [key: string]: IMovie | null;
    home: IMovie | null;
    movie: IMovie | null;
    tv: IMovie | null;
    latest: IMovie | null;
    myList: IMovie | null;
  };
}

const initialState: KeyVisualState = {
  isLoading: false,
  isError: false,
  views: {
    home: null,
    movie: null,
    tv: null,
    latest: null,
    myList: null
  }
};

const keyVisualSlice = createSlice({
  name: 'keyVisual',
  initialState,
  reducers: {
    getkeyVisualStart(state) {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    getKeyVisualSuccess(state, action: PayloadAction<KeyVisualPayload>) {
      if (state.isLoading) {
        const { keyVisual, menuName }: KeyVisualPayload = action.payload;
        state.views[menuName] = keyVisual;
        state.isLoading = false;
      }
    },
    getKeyVisualFailure(state) {
      state.isError = true;
    }
  }
});

export const fetchKeyVisual = ({
  menuName,
  genre,
  id
}: IKeyVisual): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(getkeyVisualStart());
    const keyVisual = await getMovie(genre, id);
    dispatch(getKeyVisualSuccess({ menuName, keyVisual }));
  } catch (error) {
    dispatch(getKeyVisualFailure());
    console.log(error);
  }
};

const { actions, reducer } = keyVisualSlice;
export const {
  getkeyVisualStart,
  getKeyVisualSuccess,
  getKeyVisualFailure
} = actions;
export default reducer;
