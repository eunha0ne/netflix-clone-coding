import React from 'react';
import { MovieList } from '~/features/movie/MovieList';
import { KeyVisual } from '~/features/keyVisual';

const Home = () => {
  return (
    <>
      <KeyVisual />
      <MovieList />
    </>
  );
};

export { Home as default };
