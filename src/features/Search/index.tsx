import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchSearchResults } from './searchSlice';

import { ContentBoard } from '~/components/ContentBoard';

interface SearchBoardProps {
  mediaType: string;
  keyword: string;
}

export const SearchBoard = ({ mediaType, keyword }: SearchBoardProps) => {
  const dispatch = useDispatch();

  const { movies } = useSelector((state: RootState) => ({
    movies: state.search.movies
  }));

  useEffect(() => {
    dispatch(fetchSearchResults({ mediaType, keyword }));
  }, [mediaType, keyword]);

  return useMemo(() => {
    return <ContentBoard movies={movies} />;
  }, [movies]);
};
