import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/rootReducer';

import { Loading } from '~/components/Loading';
import { Modal } from '~/components/Modal';
import { Contents } from './Contents';

export const Detail = () => {
  const modalState = useSelector((state: RootState) => ({
    isLoading: state.detail.isLoading,
    isError: state.detail.isLoading,
    movie: state.detail.data,
    genres: state.detail.genres,
    credits: state.detail.credits
    // video: state.detail.video
  }));

  return useMemo(() => {
    const { isLoading, isError, movie, genres, credits } = modalState;
    const isContentReady = !isLoading && !isError;

    return isContentReady && movie !== null ? (
      <Contents movie={movie} genres={genres} credits={credits} />
    ) : (
      <Loading />
    );
  }, [modalState]);
};
