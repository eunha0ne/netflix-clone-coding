import React from 'react';

import { KeyVisual } from '~/features/keyVisual';
import { BillBoard } from '~/features/billBoard';

const Tv = () => {
  const pageDefs = {
    viewName: 'tv',
    genre: 'tv',
    query: `/discover/tv`
  };

  return (
    <main>
      <KeyVisual {...pageDefs} id={71912} />
      <BillBoard {...pageDefs} />
    </main>
  );
};

export { Tv as default };
