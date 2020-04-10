import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
// import { getModalDetails, closeModal } from './modalSlice';

import { Contents } from './Contents';

export const Modal = () => {
  const { isOpen, movie, genres, credits, video } = useSelector(
    (state: RootState) => ({
      isOpen: state.modal.isOpen,
      movie: state.modal.data,
      genres: state.modal.genres,
      credits: state.modal.credits,
      video: state.modal.video
    })
  );

  return useMemo(() => {
    console.log('/m');
    return isOpen && movie ? (
      <Contents movie={movie} genres={genres} credits={credits} video={video} />
    ) : null;
  }, [isOpen, movie, genres, credits, video]);
};
