import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/rootReducer';

import { Loading } from '~/components/Loading';
import { Contents } from './Contents';

export const Detail = () => {
  const { isContentsReady, movie, genres, credits } = useSelector(
    (state: RootState) => ({
      isContentsReady: !state.detail.isLoading && !state.detail.isError,
      movie: state.detail.data,
      genres: state.detail.genres,
      credits: state.detail.credits
    })
  );

  return useMemo(() => {
    return isContentsReady && movie !== null ? (
      <Contents movie={movie} genres={genres} credits={credits} />
    ) : (
      <Loading />
    );
  }, [isContentsReady, movie, genres, credits]);
};
