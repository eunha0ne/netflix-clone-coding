import React from 'react';

import { KeyVisual } from '~/features/KeyVisual';
import { PosterCard } from '~/features/PosterCard';

import * as S from '~/assets/styles/Main';

const Tv = () => {
  const pageDefs = {
    menuName: 'tv',
    genre: 'tv',
    resourcePath: `/discover/tv`
  };

  return (
    <S.Main>
      <KeyVisual {...pageDefs} movieID={71912} />
      <PosterCard {...pageDefs} />
    </S.Main>
  );
};

export { Tv as default };
