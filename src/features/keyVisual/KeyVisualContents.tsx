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
  const backDir = ['tv'].includes(viewName) ? 'default' : 'reverse';

  return (
    <S.Section>
      <S.Background backPath={backPath} backDir={backDir}>
        <h2 className="blind">특별 컨텐츠</h2>
        <S.Contents>
          <h3 className="title">{title || name}</h3>
          <p className="subTitle">{tagline}</p>
          <Genres genres={genres} />
          <p className="overview">{overview}</p>
          <BtnGroups />
        </S.Contents>
      </S.Background>
    </S.Section>
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
      <svg
        width="1.75vw"
        height="100%"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
          clipRule="evenodd"
        />
        <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z" />
      </svg>
      <span>상세 정보</span>
    </button>
  </S.ButtonGroup>
);
