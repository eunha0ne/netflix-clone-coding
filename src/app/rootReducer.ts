import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from '~/features/movie/movieSlice';

const rootReducer = combineReducers({ movie: movieReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
