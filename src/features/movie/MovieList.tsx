import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/features/rootReducer';
// import { fetchPopularMovies } from '~/features/movie/movieSlice';
import { IMovie } from './types';

import { MovieListItem } from './MovieListItem';

import styled from '@emotion/styled';

function _slice(entries: IMovie[], count: number): IMovie[] {
  return entries.slice(0, count + 5);
}

function MovieList() {
  const movie = useSelector((state: RootState) => state.movie);
  const [count, setCount] = useState(0);
  const lastItemEl = useRef(null);
  let populars: IMovie[] = _slice(movie.populars, count);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <S.Ul>
      {populars.map((movie: IMovie, idx: number) => {
        const isLastItem: boolean = idx + 1 === populars.length;
        console.log(isLastItem);
        return isLastItem ? (
          <MovieListItem
            key={`popural-${movie.id}`}
            {...movie}
            idx={idx}
            isLastItem
          />
        ) : (
          <MovieListItem key={`popural-${movie.id}`} {...movie} idx={idx} />
        );
      })}
    </S.Ul>
  );
}

const S = {
  Ul: styled('ul')`
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
  `
};

export default MovieList;
