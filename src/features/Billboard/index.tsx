import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchBillboard } from './billboardSlice';
import { IBillboard } from './types';

import { Carousel } from '~/components/Carousel';

export const Billboard = (props: IBillboard) => {
  const { genre, viewName } = props;
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.billboard);
  const movies = data.views[viewName];

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchBillboard(props));
    }
  }, [dispatch, movies, props]);

  return (
    <section>
      <h2>추천 콘텐츠</h2>
      <Carousel movies={movies} genre={genre} />
    </section>
  );
};
