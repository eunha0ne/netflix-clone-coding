import { combineReducers } from '@reduxjs/toolkit';
import keyVisualReducer from '~/features/keyVisual/keyVisualSlice';
import billBoardReducer from '~/features/billBoard/billBoardSlice';

const rootReducer = combineReducers({
  keyVisual: keyVisualReducer,
  billBoard: billBoardReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
