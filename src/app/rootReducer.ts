import { combineReducers } from '@reduxjs/toolkit';
import keyVisualReducer from '~/features/keyVisual/keyVisualSlice';
import billboardReducer from '~/features/billboard/billboardSlice';

const rootReducer = combineReducers({
  keyVisual: keyVisualReducer,
  billboard: billboardReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
