import React from 'react';
import { MovieList } from '~/features/movie/MovieList';
import { KeyVisual } from '~/features/keyVisual';

const Tv = () => {
  return (
    <main>
      <KeyVisual viewName={'tv'} genre={'tv'} id={71912} />
      <MovieList />
    </main>
  );
};

export { Tv as default };
