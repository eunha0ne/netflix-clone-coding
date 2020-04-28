import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchSearchResults } from './searchSlice';

import { ContentsBoard } from '~/components/ContentsBoard';

interface SearchProps {
  mediaType: string;
  keyword: string;
}

export const SearchBoard = ({ mediaType, keyword }: SearchProps) => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: RootState) => ({
    movies: state.search.movies
  }));

  useEffect(() => {
    dispatch(fetchSearchResults({ mediaType, keyword }));
  }, [mediaType, keyword]);

  return useMemo(() => {
    return <ContentsBoard movies={movies} />;
  }, [movies]);
};
