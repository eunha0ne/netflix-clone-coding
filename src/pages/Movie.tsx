import React from 'react';

import { KeyVisual } from '~/features/keyVisual';
import { BillBoard } from '~/features/billBoard';

const Movie = () => {
  const pageDefs = {
    viewName: 'movie',
    genre: 'movie',
    query: '/discover/movie'
  };

  return (
    <main>
      <KeyVisual {...pageDefs} id={157336} />
      <BillBoard {...pageDefs} />
    </main>
  );
};

export { Movie as default };
