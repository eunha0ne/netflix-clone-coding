import React from 'react';

import { KeyVisual } from '~/features/keyVisual';
import { Billboard } from '~/features/billboard';

const Tv = () => {
  const pageDefs = {
    viewName: 'tv',
    genre: 'tv',
    query: `/discover/tv`
  };

  return (
    <main>
      <KeyVisual {...pageDefs} id={71912} />
      <Billboard {...pageDefs} />
    </main>
  );
};

export { Tv as default };
