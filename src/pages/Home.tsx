import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { KeyVisual } from '~/features/KeyVisual';
import { PosterCard } from '~/features/PosterCard';
import { Billboard } from '~/features/Billboard';

import * as S from '~/assets/styles/Main';

const defaultPageDef = {
  menuName: 'home',
  genre: 'movie',
  resourcePath: '/trending/all/week',
  sectionTitle: '특별 콘텐츠',
  movieID: 0
};

const Home = () => {
  const history = useHistory();

  const [pageDef, setPageDef] = useState(defaultPageDef);

  useEffect(() => {
    console.log('/mounted', history);
  }, []);

  return (
    <S.Main>
      <KeyVisual {...pageDef} uid={4935} />
      <PosterCard {...pageDef} />
      <Billboard {...pageDef} />
    </S.Main>
  );
};

export { Home as default };
