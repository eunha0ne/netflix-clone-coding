import React from 'react';
import { useDispatch } from 'react-redux';

import { closeModal } from './modalSlice';
import { IMovie } from '~/features/common/types';
import { ICredit } from './types';

// import { IMG_URL } from '~/constants';
import { shorten } from '~/utils/common';

import * as UI from '~/assets/ui/Icons';
import * as S from './index.style';

interface ContentsProps {
  movie: IMovie;
  genres: string[];
  credits: ICredit[];
}

export const Contents = ({
  movie: {
    title,
    name,
    original_title: originalTitle,
    original_name: originalName,
    release_date,
    overview: text,
    backdrop_path: backdropPath
  },
  genres,
  credits
}: ContentsProps) => {
  const releaseDate = release_date && release_date.split('-')[0];
  const synopsis = text.length > 300 ? shorten(text, 300) : text;

  return (
    <S.Background className="app-modal">
      <S.Modal backPath={backdropPath}>
        <S.Article>
          <Header
            title={title || name}
            originalTitle={originalTitle || originalName}
            releaseDate={releaseDate}
          />

          <div className="contents">
            <p>{synopsis}</p>
          </div>
          <div className="btn-groups">
            <button>재생</button>
            <FavButton />
          </div>

          <Meta genres={genres} credits={credits} />
        </S.Article>
        <CloseButton />
      </S.Modal>
    </S.Background>
  );
};

const Header = ({
  title,
  originalTitle,
  releaseDate
}: {
  [key: string]: string;
}) => {
  return (
    <header>
      <strong className="title">{title}</strong>
      <p>
        {originalTitle}
        {releaseDate && <span className="release-date">, {releaseDate}</span>}
      </p>
    </header>
  );
};

const Meta = ({
  genres,
  credits
}: {
  genres: string[];
  credits: ICredit[];
}) => (
  <S.Meta>
    <div className="credits">
      <strong>주연:</strong>
      <ul>
        {credits.map((credit, idx) => {
          const toggleComma = idx !== credits.length - 1 ? ',' : '';
          return (
            <li key={`credits-${idx}`}>
              <span>
                {credit.name}
                {toggleComma}
              </span>
            </li>
          );
        })}
      </ul>
    </div>

    <div className="genres">
      <strong>장르:</strong>
      <ul>
        {genres.map((genre, idx) => {
          return <li key={`genres-${idx}`}>{genre}</li>;
        })}
      </ul>
    </div>
  </S.Meta>
);

const FavButton = () => {
  return (
    <S.PlusBtn>
      <UI.Plus width="2vw" height="2vw" />
      <span>내가 찜한 콘텐츠</span>
    </S.PlusBtn>
  );
};

const CloseButton = () => {
  const dispatch = useDispatch();

  return (
    <S.CloseBtn className="close-btn" onClick={() => dispatch(closeModal())}>
      <UI.IconX width="3vw" height="3vw" />
      <span className="blind">콘텐츠 닫기</span>
    </S.CloseBtn>
  );
};
