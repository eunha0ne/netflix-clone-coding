import { combineReducers } from '@reduxjs/toolkit';

import keyVisualReducer from '~/features/KeyVisual/keyVisualSlice';
import billboardReducer from '~/features/Billboard/billboardSlice';
import posterCardReducer from '~/features/PosterCard/posterCardSlice';
import modalReducer from '~/features/Modal/modalSlice';
import detailReducer from '~/features/Detail/detailSlice';

const rootReducer = combineReducers({
  keyVisual: keyVisualReducer,
  billboard: billboardReducer,
  posterCard: posterCardReducer,
  modal: modalReducer,
  detail: detailReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
