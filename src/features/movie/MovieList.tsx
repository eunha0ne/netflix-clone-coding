import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootState } from '~/app/rootReducer';
import { fetchPopularMovies } from '~/features/movie/movieSlice';
import { IMovie } from './types';

import { MovieListItem } from './MovieListItem';

import styled from '@emotion/styled';

export const MovieList = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(5);
  const populars = useSelector((state: RootState) => {
    console.log('/root', count);
    return state.movie.populars.slice(0, count);
  }, shallowEqual);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    console.log('/ues');
  }, []);

  console.log('/');

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

function _slice(count: number, entries: IMovie[]): IMovie[] {
  const result = entries.slice(0, count + 5);

  return result;
}

const S = {
  Ul: styled('ul')`
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
  `
};
