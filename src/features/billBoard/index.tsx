import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchBillBoard } from './billBoardSlice';
import { IBoardProps } from './types';

import { Carousel } from '~/components/Carousel';

export const BillBoard = (props: IBoardProps) => {
  const { genre, viewName } = props;
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.billBoard);
  const movies = data.views[viewName];

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchBillBoard(props));
    }
  }, [dispatch, movies, props]);

  return (
    <section>
      <h2>추천 콘텐츠</h2>
      <Carousel movies={movies} genre={genre} />
    </section>
  );
};
