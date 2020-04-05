import React from 'react';
import { MovieList } from '~/features/movie/MovieList';
import { KeyVisual } from '~/features/keyVisual';

const Home = () => {
  return (
    <main>
      <h2 className="blind">홈</h2>
      <KeyVisual />
      <MovieList />
    </main>
  );
};

export { Home as default };
