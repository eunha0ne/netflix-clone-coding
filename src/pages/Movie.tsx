import React from 'react';

import { KeyVisual } from '~/features/KeyVisual';
import { PosterCard } from '~/features/PosterCard';

import * as S from '~/assets/styles/main';

const Movie = () => {
  const pageDefs = {
    menuName: 'movie',
    genre: 'movie',
    resourcePath: '/discover/movie'
  };

  return (
    <S.Main>
      <KeyVisual {...pageDefs} uid={157336} />
      <PosterCard {...pageDefs} />
    </S.Main>
  );
};

export { Movie as default };
