import React from 'react';
import { useParams } from 'react-router';

import { KeyVisual } from '~/features/KeyVisual';
import { PosterCard } from '~/features/PosterCard';
import { Billboard } from '~/features/Billboard';

import * as S from '~/assets/styles/Main';

const getMenuName = (genre?: string) => {
  const defaultName = 'home';
  const isGenreName = genre !== undefined;

  return isGenreName ? genre! : defaultName;
};

interface IResourcePath {
  [key: string]: {
    genre: string;
    resourcePath: string;
    sectionTitle: string;
  };
}

const pagePreset: IResourcePath = {
  home: {
    genre: 'movie',
    resourcePath: '/trending/all/week',
    sectionTitle: '특별 콘텐츠'
  },
  movie: {
    genre: 'movie',
    resourcePath: '/discover/movie',
    sectionTitle: ''
  },
  tv: {
    genre: 'tv',
    resourcePath: '/discover/tv',
    sectionTitle: ''
  },
  latest: {
    genre: 'movie',
    resourcePath: '/movie/now_playing',
    sectionTitle: ''
  }
};

interface IParam {
  genre: string;
  id: string;
}

const Browse = () => {
  const { genre, id } = useParams<IParam>();
  const pageDef = {
    ...pagePreset[genre],
    menuName: getMenuName(genre),
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
