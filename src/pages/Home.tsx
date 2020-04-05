import React from 'react';
import { MovieList } from '~/features/movie/MovieList';
import { KeyVisual } from '~/features/keyVisual';

const Home = () => {
  return (
    <main>
      <KeyVisual viewName={'home'} genre={'movie'} id={4935} />
      <MovieList />
    </main>
  );
};

export { Home as default };
