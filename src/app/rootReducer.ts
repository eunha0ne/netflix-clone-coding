import { combineReducers } from '@reduxjs/toolkit';
import keyVisualReducer from '~/features/KeyVisual/keyVisualSlice';
import billboardReducer from '~/features/Billboard/billboardSlice';
import posterCardReducer from '~/features/PosterCard/posterCardSlice';

const rootReducer = combineReducers({
  keyVisual: keyVisualReducer,
  billboard: billboardReducer,
  posterCard: posterCardReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
