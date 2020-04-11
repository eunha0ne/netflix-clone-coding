import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/rootReducer';

import { Contents } from './Contents';

export const DetailPopup = () => {
  const { isOpen, movie, genres, credits } = useSelector(
    (state: RootState) => ({
      isOpen: state.modal.isOpen,
      movie: state.detail.data,
      genres: state.detail.genres,
      credits: state.detail.credits
      // video: state.detail.video
    })
  );

  return useMemo(() => {
    return isOpen && movie ? (
      <Contents movie={movie} genres={genres} credits={credits} />
    ) : null;
  }, [isOpen, movie, genres, credits]);
};
