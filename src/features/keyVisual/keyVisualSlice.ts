import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/app/store';
import { getKeyVisual } from '~/api/movie';
import { IMovie, IKeyVisualProps } from './types';

export interface IKeyVisual {
  isLoading: boolean;
  isError: boolean;
  views: {
    [key: string]: IMovie | null;
    home: IMovie | null;
    movie: IMovie | null;
    tv: IMovie | null;
    latest: IMovie | null;
    myList: IMovie | null;
  };
}

const initialState: IKeyVisual = {
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
    getKeyVisualSuccess(state, action: PayloadAction<IKeyVisaulPayload>) {
      if (state.isLoading) {
        const { keyVisual, viewName }: IKeyVisaulPayload = action.payload;
        state.views[viewName] = keyVisual;
        state.isLoading = false;
      }
    },
    getKeyVisualFailure(state) {
      state.isError = true;
    }
  }
});

interface IKeyVisaulPayload {
  viewName: string;
  keyVisual: IMovie;
}

export const fetchKeyVisual = ({
  viewName,
  genre,
  id
}: IKeyVisualProps): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(getkeyVisualStart());
    const keyVisual = await getKeyVisual({ genre, id });
    dispatch(getKeyVisualSuccess({ viewName, keyVisual }));
  } catch (error) {
    dispatch(getKeyVisualFailure());
    throw error;
  }
};

const { actions, reducer } = keyVisualSlice;
export const {
  getkeyVisualStart,
  getKeyVisualSuccess,
  getKeyVisualFailure
} = actions;
export default reducer;
