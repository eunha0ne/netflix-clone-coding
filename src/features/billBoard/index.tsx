import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchBillBoard } from './billBoardSlice';
import { IBoardProps } from './types';

import { BillBoardContents } from './BillBoardContents';

export const BillBoard = ({ genre, viewName }: IBoardProps) => {
  const dispatch = useDispatch();
  const board = useSelector((state: RootState) => state.billBoard);
  const { isLoading, isError, views } = board;
  const movies = views[viewName];

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchBillBoard({ genre, viewName }));
    }
  }, [movies, genre, viewName]);

  return <BillBoardContents movies={movies} genre={genre} />;
};
