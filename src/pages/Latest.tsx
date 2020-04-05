import React from 'react';
import { MovieList } from '~/features/movie/MovieList';
import { KeyVisual } from '~/features/keyVisual';

const Latest = () => {
  return (
    <main>
      <KeyVisual viewName={'latest'} genre={'movie'} id={653567} />
      <MovieList />
    </main>
  );
};

export { Latest as default };
