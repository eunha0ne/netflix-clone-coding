import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from '~/features/movies/moviesSlice';
import todos from '~/features/todoList/todoSlice';

const rootReducer = combineReducers({ movies: moviesReducer, todos });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
