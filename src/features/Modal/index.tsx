import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { getModalDetails, closeModal } from './modalSlice';

import { Contents } from './Contents';

export const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, movie } = useSelector((state: RootState) => ({
    isOpen: state.modal.isOpen,
    movie: state.modal.data
  }));

  useEffect(() => {
    if (movie !== null) {
      const { genre_ids, media_type, id } = movie;
      dispatch(
        getModalDetails({ genres: genre_ids, mediaType: media_type, id })
      );
    }
  }, [movie]);

  return useMemo(() => {
    console.log('/m');
    return isOpen && movie ? <Contents movie={movie} /> : null;
  }, [isOpen, movie]);
};
