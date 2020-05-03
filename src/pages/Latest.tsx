import React from 'react';

import { KeyVisual } from '~/features/KeyVisual';
import { PosterCard } from '~/features/PosterCard';

import * as S from '~/assets/styles/Main';

const Latest = () => {
  const pageDefs = {
    menuName: 'latest',
    genre: 'movie',
    resourcePath: `/movie/now_playing`
  };

  return (
    <S.Main>
      <KeyVisual {...pageDefs} movieID={653567} />
      <PosterCard {...pageDefs} />
    </S.Main>
  );
};

export { Latest as default };
