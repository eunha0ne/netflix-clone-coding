import React from 'react';
import { IMovie } from '~/app/types';

import { Item } from './Item';
import * as S from './index.style';

interface ContentsProps {
  loadPage?: CallableFunction;
  movies: IMovie[];
}

export const ContentBoard = ({ movies, loadPage }: ContentsProps) => {
  const lastIdx = movies.length - 1;

  return (
    <S.Ul>
      {movies.map((movie, idx) => {
        const isLastItem = lastIdx === idx;
        const key = `${idx}`;
        const isContents = movie.backdrop_path;

        if (isContents) {
          return isLastItem ? (
            <Item key={key} movie={movie} idx={idx} loadPage={loadPage} />
          ) : (
            <Item key={key} movie={movie} idx={idx} />
          );
        } else return null;
      })}
    </S.Ul>
  );
};
