import React from 'react';
import { IMovie } from './types';
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
  const dir = ['tv'].includes(viewName) ? 'default' : 'reverse';

  return (
    <S.Section>
      <S.Background backPath={backPath} dir={dir}>
        <h2 className="blind">특별 컨텐츠</h2>
        <S.Contents>
          <h3 className="title">{title || name}</h3>
          <p>{tagline}</p>
          <ul className="genres">
            {genres.map((genre, idx) => (
              <li key={`key-genre-${idx}`}>{genre.name}</li>
            ))}
          </ul>
          <p>{overview}</p>
          <BtnGroups />
        </S.Contents>
      </S.Background>
    </S.Section>
  );
};

const BtnGroups = () => (
  <div className="visual__btns">
    <button>재생</button>
    <button>상세 정보</button>
  </div>
);
