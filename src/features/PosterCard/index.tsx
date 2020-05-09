import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchBillboard } from './posterCardSlice';
import { IMovie } from '~/app/types';
import { IPosterCard } from './types';

import { Carousel } from '~/components/Carousel';

import * as S from './index.style';

export const PosterCard = (props: IPosterCard) => {
  const dispatch = useDispatch();
  const { genre, menuName } = props;
  const { movies } = useSelector((state: RootState): { movies: IMovie[] } => ({
    movies: state.posterCard.views[menuName]
  }));

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchBillboard(props));
    }
  }, [dispatch, movies, props]);

  return (
    <S.Section>
      <h2 className="section-title">추천 콘텐츠</h2>
      <Carousel movies={movies} genre={genre} />
    </S.Section>
  );
};
