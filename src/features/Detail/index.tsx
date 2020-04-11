import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
// import { getModalDetails, closeModal } from './modalSlice';

import { Contents } from './Contents';

export const Modal = () => {
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
    console.log('/m', isOpen, movie);
    return isOpen && movie ? (
      <Contents movie={movie} genres={genres} credits={credits} />
    ) : null;
  }, [isOpen, movie, genres, credits]);
};
