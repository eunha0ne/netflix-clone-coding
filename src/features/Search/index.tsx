import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
// import { IBillboard } from './types';
import { fetchSearchResults } from './searchSlice';

// import { Contents } from './Contents';
import * as S from './index.style';
import {
  BILLBOARD_ITEMS_LEN as ITEMS_LEN,
  BILLBOARD_MAX_LEN
} from '~/constants';

export const SearchBoard = ({ mediaType, keyword }) => {
  const dispatch = useDispatch();

  const { movies } = useSelector((state: RootState) => ({
    movies: state.search.movies
  }));

  useEffect(() => {
    dispatch(fetchSearchResults({ mediaType, keyword }));
  }, []);

  return useMemo(() => {
    return <div></div>;
  }, [movies]);
};
