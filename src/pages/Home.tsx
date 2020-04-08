import React from 'react';

import { KeyVisual } from '~/features/KeyVisual';
import { PosterCard } from '~/features/PosterCard';
import { Billboard } from '~/features/Billboard';

const Home = () => {
  const pageDefs = {
    menuName: 'home',
    genre: 'movie',
    resourcePath: '/trending/all/week',
    sectionTitle: '특별 콘텐츠'
  };

  return (
    <main>
      <KeyVisual {...pageDefs} uid={4935} />
      <PosterCard {...pageDefs} />
      <Billboard {...pageDefs} />
    </main>
  );
};

export { Home as default };
