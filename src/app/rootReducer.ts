import { combineReducers } from '@reduxjs/toolkit';

import keyVisualReducer from '~/features/KeyVisual/keyVisualSlice';
import billboardReducer from '~/features/Billboard/billboardSlice';
import posterCardReducer from '~/features/PosterCard/posterCardSlice';
import modalReducer from '~/features/Modal/modalSlice';
import detailReducer from '~/features/Detail/detailSlice';
import searchReducer from '~/features/Search/searchSlice';
import videoReducer from '~/features/VideoPlayer/videoSlice';

const rootReducer = combineReducers({
  keyVisual: keyVisualReducer,
  billboard: billboardReducer,
  posterCard: posterCardReducer,
  modal: modalReducer,
  detail: detailReducer,
  search: searchReducer,
  video: videoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
