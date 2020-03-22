import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPopularMovies } from '~/features/movie/movieSlice';

import MovieList from '~/features/movie/MovieList';
import AddTodo from '~/features/todoList/AddTodo';
import TodoList from '~/features/todoList/TodoList';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <>
      <header>
        <h2>Home contents</h2>
      </header>
      <MovieList />
      <AddTodo />
      <TodoList />
    </>
  );
};

export { Home as default };
