import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from '~/features/movie/movieSlice';
import keyVisualReducer from '~/features/keyVisual/keyVisualSlice';
import billBoardReducer from '~/features/billBoard/billBoardSlice';

const rootReducer = combineReducers({
  movie: movieReducer,
  keyVisual: keyVisualReducer,
  billBoard: billBoardReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
