import React from 'react';
import { IMovie } from '~/features/common/types';

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
          <ContentsItem key={key} idx={idx} movie={movie} loadPage={loadPage} />
        ) : (
          <ContentsItem key={key} idx={idx} movie={movie} />
        );
      })}
    </S.Ul>
  );
};
