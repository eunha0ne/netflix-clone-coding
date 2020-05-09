import { createSlice } from '@reduxjs/toolkit';
interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    }
  }
});

const { actions, reducer } = modalSlice;
export const { openModal, closeModal } = actions;
export default reducer;
