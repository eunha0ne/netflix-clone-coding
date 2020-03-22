import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/features/rootReducer';

import { MovieListItem } from './MovieListItem';
import { IMovie } from './types';

export default function MovieList() {
  const movie = useSelector((state: RootState) => state.movie);
  const { populars } = movie;

  return (
    <ul>
      {populars.map(movie => {
        return <MovieListItem key={`popural-${movie.id}`} {...movie} />;
      })}
    </ul>
  );
}
