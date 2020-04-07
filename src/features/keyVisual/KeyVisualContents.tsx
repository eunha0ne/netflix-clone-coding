import React from 'react';
import { IMovie } from './types';

import * as UI from '~/assets/ui/Icons';
import * as S from './KeyVisualContents.style';

interface IMovieContent extends IMovie {
  viewName: string;
}

export const KeyVisualContents = ({
  title,
  name,
  tagline,
  overview,
  genres,
  backdrop_path: backPath,
  viewName
}: IMovieContent) => {
  const backDir = ['tv'].includes(viewName) ? 'default' : 'reverse';

  return (
    <>
      <h2 className="blind">특별 컨텐츠</h2>
      <S.Background backPath={backPath} backDir={backDir}>
        <S.Contents>
          <h3 className="title">{title || name}</h3>
          <p className="subTitle">{tagline}</p>
          <Genres genres={genres} />
          <p className="overview">{overview}</p>
          <BtnGroups />
        </S.Contents>
      </S.Background>
    </>
  );
};

interface IGeners {
  genres: [{ id: number; name: string }];
}

const Genres = ({ genres }: IGeners) => {
  return genres ? (
    <S.ListGroup>
      {genres.map((genre, idx) => (
        <li key={`key-genre-${idx}`}>{genre.name}</li>
      ))}
    </S.ListGroup>
  ) : null;
};

const BtnGroups = () => (
  <S.ButtonGroup>
    <button className="play">
      <span>재생</span>
    </button>

    <button className="details">
      <UI.InfoCircle width="1.75vw" height="100%" />
      <span>상세 정보</span>
    </button>
  </S.ButtonGroup>
);
