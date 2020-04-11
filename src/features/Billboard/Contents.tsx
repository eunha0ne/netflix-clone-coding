import React from 'react';
import { IMovie } from '~/app/types';

import { ContentsItem } from './ContentsItem';
import * as S from './Contents.style';

interface ContentsProps {
  loadPage: CallableFunction;
  movies: IMovie[];
}

export const Contents = ({ movies, loadPage }: ContentsProps) => {
  const lastIdx = movies.length - 1;

  return (
    <S.Ul>
      {movies.map((movie, idx) => {
        const isLastItem = lastIdx === idx;
        const key = `${idx}`;

        return isLastItem ? (
          <ContentsItem key={key} movie={movie} idx={idx} loadPage={loadPage} />
        ) : (
          <ContentsItem key={key} movie={movie} idx={idx} />
        );
      })}
    </S.Ul>
  );
};
