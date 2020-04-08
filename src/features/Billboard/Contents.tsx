import React, { useMemo } from 'react';
import { IMovie } from '~/features/common/types';

import { ContentsItem } from './ContentsItem';
import * as S from './Contents.style';

interface ContentsProps {
  loadPage: CallableFunction;
  movies: IMovie[];
}

export const Contents = ({ movies, loadPage }: ContentsProps) => {
  const lastNum = movies.length;

  return (
    <S.Ul>
      {useMemo(() => {
        return movies.map((movie, idx) => (
          <ContentsItem key={movie.id} movie={movie} />
        ));
      }, [movies])}
    </S.Ul>
  );
};
