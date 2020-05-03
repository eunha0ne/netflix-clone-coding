import React from 'react';
import { useParams } from 'react-router';

import { KeyVisual } from '~/features/KeyVisual';
import { PosterCard } from '~/features/PosterCard';
import { Billboard } from '~/features/Billboard';

import * as S from '~/assets/styles/Main';

interface IParam {
  genre: string;
  id: string;
}

const Browse = () => {
  const { genre, id } = useParams<IParam>();
  const pageDef = {
    menuName: 'home',
    genre: genre, // !genre && !id === { menuName: 'home' }
    resourcePath: '/trending/all/week', // RESOURCE_PATH.moive === 'trending/all/week'
    sectionTitle: '특별 콘텐츠',
    movieID: parseInt(id)
  };

  return (
    <S.Main>
      <KeyVisual {...pageDef} />
      <PosterCard {...pageDef} />
      <Billboard {...pageDef} />
    </S.Main>
  );
};

export { Browse as default };
