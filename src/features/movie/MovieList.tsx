import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchPopularMovies } from '~/features/movie/movieSlice';
import { IMovie } from './types';

import { MovieListItem } from './MovieListItem';
import styled from '@emotion/styled';

export const MovieList = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(5);
  const populars = useSelector((state: RootState) => state.movie.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <S.Ul>
      {populars.map((movie: IMovie, idx: number) => {
        const isLastItem: boolean = idx + 1 === populars.length;

        return isLastItem ? (
          <MovieListItem
            key={`popural-${movie.id}`}
            {...movie}
            idx={idx}
            isLastItem
            loadItem={() => setCount(count + 5)}
          />
        ) : (
          <MovieListItem key={`popural-${movie.id}`} {...movie} idx={idx} />
        );
      })}
    </S.Ul>
  );
};

const S = {
  Ul: styled('ul')`
    z-index: 1;
    position: relative;
    padding: 0 4%;
    white-space: nowrap;
    font-size: 0;
    vertical-align: top;
  `
};
