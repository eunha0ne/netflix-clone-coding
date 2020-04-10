import React from 'react';
import { useDispatch } from 'react-redux';
import { shorten } from '~/utils/common';

import { closeModal } from './modalSlice';
import { IMovie } from '~/features/common/types';

import * as UI from '~/assets/ui/Icons';
import * as S from './index.style';

interface ContentsProps {
  movie: IMovie;
}

export const Contents = ({
  movie: {
    title,
    name,
    original_title,
    original_name,
    release_date,
    overview,
    backdrop_path
  }
}: ContentsProps) => {
  const releaseDate = release_date && release_date.split('-')[0];
  const descriptions =
    overview.length > 300 ? shorten(overview, 300) : overview;

  return (
    <S.Background className="app-modal">
      <S.Wrapper backPath={backdrop_path}>
        <S.Article>
          <header>
            <strong className="title">{title || name}</strong>
            <p>
              {original_title || original_name}
              {releaseDate && (
                <span className="release-date">, {releaseDate}</span>
              )}
            </p>
          </header>

          <div className="contents">
            <p>{descriptions}</p>
          </div>

          <div className="btn-groups">
            <button>재생</button>
            <FavButton />
          </div>
        </S.Article>
        <CloseButton />
      </S.Wrapper>
    </S.Background>
  );
};

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
