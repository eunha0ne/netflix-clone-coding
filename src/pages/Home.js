import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '~/features/movies/moviesSlice';

import AddTodo from '~/features/todoList/AddTodo';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('/1', addMovie);
    dispatch(addMovie());
    console.log('/2', dispatch);
  }, []);

  return (
    <>
      <header>
        <h2>Home contents</h2>
      </header>
      <AddTodo />
    </>
  );
};

export { Home as default };
