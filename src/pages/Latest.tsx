import React from 'react';

import { KeyVisual } from '~/features/keyVisual';
import { Billboard } from '~/features/billboard';

const Latest = () => {
  const pageDefs = {
    viewName: 'latest',
    genre: 'movie',
    query: `/trending/all/week`
  };

  return (
    <main>
      <KeyVisual {...pageDefs} id={653567} />
      <Billboard {...pageDefs} />
    </main>
  );
};

export { Latest as default };
