import React from 'react';

import { KeyVisual } from '~/features/KeyVisual';
import { PosterCard } from '~/features/PosterCard';

const Home = () => {
  const pageDefs = {
    viewName: 'home',
    genre: 'movie',
    query: `/movie/popular`
  };

  return (
    <main>
      <KeyVisual {...pageDefs} id={4935} />
      <PosterCard {...pageDefs} />
    </main>
  );
};

export { Home as default };
