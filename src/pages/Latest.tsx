import React from 'react';

import { KeyVisual } from '~/features/KeyVisual';
import { PosterCard } from '~/features/PosterCard';

const Latest = () => {
  const pageDefs = {
    viewName: 'latest',
    genre: 'movie',
    query: `/trending/all/week`
  };

  return (
    <main>
      <KeyVisual {...pageDefs} id={653567} />
      <PosterCard {...pageDefs} />
    </main>
  );
};

export { Latest as default };
