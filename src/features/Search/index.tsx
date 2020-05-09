import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchSearchResults } from './searchSlice';

import { Loading } from '~/components/Loading';
import { ContentsBoard } from '~/components/ContentsBoard';

import * as S from './index.style';

interface SearchProps {
  mediaType?: string;
  keyword: string;
}

export const SearchBoard = ({ mediaType, keyword }: SearchProps) => {
  const dispatch = useDispatch();
  const { movies, isContentsReady } = useSelector((state: RootState) => ({
    movies: state.search.movies,
    isContentsReady: !state.keyVisual.isLoading && !state.keyVisual.isError
  }));

  useEffect(() => {
    dispatch(fetchSearchResults({ mediaType, keyword }));
  }, [dispatch, mediaType, keyword]);

  return (
    <S.Section>
      <p>검색어: {keyword}</p>
      <h2>영화/TV 프로그램 검색</h2>
      {useMemo(() => {
        return isContentsReady ? (
          <ContentsBoard movies={movies} />
        ) : (
          <Loading />
        );
      }, [movies, isContentsReady])}
    </S.Section>
  );
};
