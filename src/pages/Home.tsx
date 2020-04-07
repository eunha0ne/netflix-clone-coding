import React from 'react';

import { KeyVisual } from '~/features/keyVisual';
import { BillBoard } from '~/features/billBoard';

const Home = () => {
  const pageDefs = {
    viewName: 'home',
    genre: 'movie',
    query: `/movie/popular`
  };

  return (
    <main>
      <KeyVisual {...pageDefs} id={4935} />
      <BillBoard {...pageDefs} />
    </main>
  );
};

export { Home as default };
