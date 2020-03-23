import React from 'react';
import { MovieList } from '~/features/movie/MovieList';
import { KeyVisual } from '~/components/KeyVisual';

const Home = () => {
  return (
    <>
      <header>
        <h2>Home contents</h2>
      </header>
      <KeyVisual />
      <MovieList />
    </>
  );
};

export { Home as default };
