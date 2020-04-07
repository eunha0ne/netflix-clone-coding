import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchBillBoard } from './billBoardSlice';
import { IBoardProps } from './types';

import { BillBoardContents } from './BillBoardContents';

export const BillBoard = ({ genre, viewName, query }: IBoardProps) => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.billBoard);
  const movies = data.views[viewName];

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchBillBoard({ genre, viewName, query }));
    }
  }, [movies, genre, viewName]);

  return <BillBoardContents movies={movies} genre={genre} />;
};
