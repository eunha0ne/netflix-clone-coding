import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '~/app/store';
import { getKeyVisual } from '~/api/movie';
import { IMovie } from './types';

export interface IKeyVisual {
  loading: 'idle' | 'pending' | 'sucess' | 'error';
  error: null | string;
  movie: null | IMovie;
}

const initialState: IKeyVisual = {
  loading: 'idle',
  error: null,
  movie: null
};

const keyVisualSlice = createSlice({
  name: 'keyVisual',
  initialState,
  reducers: {
    getkeyVisualStart(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    getKeyVisualSuccess(state, action: PayloadAction<IMovie>) {
      if (state.loading === 'pending') {
        state.loading = 'sucess';
        state.movie = action.payload;
      }
    },
    getKeyVisualFailure(state, action: PayloadAction<string>) {
      state.loading = 'error';
      state.error = action.payload;
    }
  }
});

export const fetchKeyVisual = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(getkeyVisualStart());
    const keyVisual = await getKeyVisual({ genre: 'movie' });
    dispatch(getKeyVisualSuccess(keyVisual));
  } catch (err) {
    dispatch(getKeyVisualFailure(err));
  }
};

const { actions, reducer } = keyVisualSlice;
export const {
  getkeyVisualStart,
  getKeyVisualSuccess,
  getKeyVisualFailure
} = actions;
export default reducer;
