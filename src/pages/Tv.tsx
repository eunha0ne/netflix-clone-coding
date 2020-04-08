import React from 'react';

import { KeyVisual } from '~/features/KeyVisual';
import { PosterCard } from '~/features/PosterCard';

const Tv = () => {
  const pageDefs = {
    menuName: 'tv',
    genre: 'tv',
    resourcePath: `/discover/tv`
  };

  return (
    <main>
      <KeyVisual {...pageDefs} uid={71912} />
      <PosterCard {...pageDefs} />
    </main>
  );
};

export { Tv as default };
