import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from '~/features/movie/movieSlice';
import todos from '~/features/todoList/todoSlice';

const rootReducer = combineReducers({ movie: movieReducer, todos });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
