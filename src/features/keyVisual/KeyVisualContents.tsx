import React from 'react';
import { IMovie } from './types';

import * as S from './KeyVisualContents.style';

export const KeyVisualContents = ({
  title,
  name,
  tagline,
  overview,
  genres,
  backdrop_path: backURL
}: IMovie) => {
  return (
    <S.Wrapper backPath={backURL}>
      <div className="visual">
        <h3 className="visual__title">{title || name}</h3>
        <p>{tagline}</p>
        <ul className="visual__genres">
          {genres.map((genre, idx) => (
            <li key={`key-genre-${idx}`}>{genre.name}</li>
          ))}
        </ul>
        <p>{overview}</p>
        <BtnGroups />
      </div>
    </S.Wrapper>
  );
};

const BtnGroups = () => (
  <div className="visual__btns">
    <button>재생</button>
    <button>상세 정보</button>
  </div>
);
