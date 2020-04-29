import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchSearchResults } from './searchSlice';

import { Loading } from '~/components/Loading';
import { ContentsBoard } from '~/components/ContentsBoard';

interface SearchProps {
  mediaType?: string;
  keyword: string;
}

export const SearchBoard = ({ mediaType, keyword }: SearchProps) => {
  const dispatch = useDispatch();
  const { movies, isLoading, isError } = useSelector((state: RootState) => ({
    movies: state.search.movies,
    isLoading: state.search.isLoading,
    isError: state.search.isError
  }));

  useEffect(() => {
    dispatch(fetchSearchResults({ mediaType, keyword }));
  }, [dispatch, mediaType, keyword]);

  const isContentsReady = !isLoading && !isError;
  return useMemo(() => {
    return isContentsReady ? <ContentsBoard movies={movies} /> : <Loading />;
  }, [movies, isContentsReady]);
};
