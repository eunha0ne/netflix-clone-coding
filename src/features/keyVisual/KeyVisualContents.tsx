import React from 'react';
import { IMovie } from './types';

import * as S from './keyVisualContents.style';

export const KeyVisualContents = (props: IMovie) => {
  const { title, tagline, overview, genres, backdrop_path: backURL } = props;

  return (
    <S.Wrapper backPath={backURL}>
      <div className="visual">
        <h3 className="visual__title">{title}</h3>
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
