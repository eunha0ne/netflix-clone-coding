import React from 'react';

import { KeyVisual } from '~/features/KeyVisual';
import { PosterCard } from '~/features/PosterCard';

const Movie = () => {
  const pageDefs = {
    menuName: 'movie',
    genre: 'movie',
    resourcePath: '/discover/movie'
  };

  return (
    <main>
      <KeyVisual {...pageDefs} id={157336} />
      <PosterCard {...pageDefs} />
    </main>
  );
};

export { Movie as default };
