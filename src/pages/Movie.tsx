import React from 'react';

import { KeyVisual } from '~/features/keyVisual';
import { Billboard } from '~/features/billboard';

const Movie = () => {
  const pageDefs = {
    viewName: 'movie',
    genre: 'movie',
    query: '/discover/movie'
  };

  return (
    <main>
      <KeyVisual {...pageDefs} id={157336} />
      <Billboard {...pageDefs} />
    </main>
  );
};

export { Movie as default };
