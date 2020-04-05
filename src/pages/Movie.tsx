import React from 'react';
import { MovieList } from '~/features/movie/MovieList';
import { KeyVisual } from '~/features/keyVisual';

const Movie = () => {
  return (
    <main>
      <KeyVisual viewName={'movie'} genre={'movie'} id={157336} />
      <MovieList />
    </main>
  );
};

export { Movie as default };
