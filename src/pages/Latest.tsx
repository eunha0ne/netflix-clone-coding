import React from 'react';

import { KeyVisual } from '~/features/KeyVisual';
import { PosterCard } from '~/features/PosterCard';

const Latest = () => {
  const pageDefs = {
    menuName: 'latest',
    genre: 'movie',
    resourcePath: `/movie/now_playing`
  };

  return (
    <main>
      <KeyVisual {...pageDefs} id={653567} />
      <PosterCard {...pageDefs} />
    </main>
  );
};

export { Latest as default };
