import React from 'react';

import { KeyVisual } from '~/features/keyVisual';
import { BillBoard } from '~/features/billBoard';

const Latest = () => {
  const pageDefs = {
    viewName: 'latest',
    genre: 'movie',
    query: `/trending/all/week`
  };

  return (
    <main>
      <KeyVisual {...pageDefs} id={653567} />
      <BillBoard {...pageDefs} />
    </main>
  );
};

export { Latest as default };
