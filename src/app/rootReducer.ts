import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from '~/features/movie/movieSlice';
import keyVisualReducer from '~/features/keyVisual/keyVisualSlice';

const rootReducer = combineReducers({
  movie: movieReducer,
  keyVisual: keyVisualReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
