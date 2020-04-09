import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { IMovie } from '~/features/common/types';

import * as S from './index.style';

export const Modal = () => {
  const { isOpen, movie } = useSelector((state: RootState) => ({
    isOpen: state.modal.isOpen,
    movie: state.modal.data
  }));

  return useMemo(() => {
    console.log('/m');
    return isOpen && movie ? <ModalContent movie={movie} /> : null;
  }, [isOpen, movie]);
};

interface ModalContentProps {
  movie: IMovie;
}

const ModalContent = ({
  movie: {
    title,
    name,
    original_title,
    original_name,
    release_date,
    overview,
    backdrop_path
  }
}: ModalContentProps) => {
  const releaseDate = release_date.split('-')[0];

  return (
    <S.Background className="app-modal">
      <S.Wrapper backPath={backdrop_path}>
        <S.Article>
          <header>
            <strong className="title">{title || name}</strong>
            <p>{original_title || original_name}</p>
            <span className="release-date">{releaseDate}</span>
          </header>

          <p className="contents">{overview}</p>
          <FavButton />
          <CloseButton />
        </S.Article>
      </S.Wrapper>
    </S.Background>
  );
};

const FavButton = () => {
  return (
    <button>
      <span>내가 찜한 콘텐츠</span>
    </button>
  );
};

const CloseButton = () => {
  return <button></button>;
};
