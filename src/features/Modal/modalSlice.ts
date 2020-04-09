import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from '~/features/common/types';

interface ModalState {
  isOpen: boolean;
  data: IMovie | null;
}

const initialState: ModalState = {
  isOpen: false,
  data: null
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, { payload }: PayloadAction<IMovie>) {
      state.data = payload;
      state.isOpen = true;
    }
  }
});

const { actions, reducer } = modalSlice;
export const { openModal } = actions;
export default reducer;
