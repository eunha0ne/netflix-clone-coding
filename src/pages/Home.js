import React from 'react';
import { MovieList } from '~/features/movie/MovieList';

const Home = () => {
  return (
    <>
      <header>
        <h2>Home contents</h2>
      </header>
      <MovieList />
    </>
  );
};

export { Home as default };
