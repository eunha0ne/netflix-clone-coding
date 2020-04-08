import React from 'react';

import { KeyVisual } from '~/features/keyVisual';
import { Billboard } from '~/features/billboard';

const Home = () => {
  const pageDefs = {
    viewName: 'home',
    genre: 'movie',
    query: `/movie/popular`
  };

  return (
    <main>
      <KeyVisual {...pageDefs} id={4935} />
      <Billboard {...pageDefs} />
    </main>
  );
};

export { Home as default };
