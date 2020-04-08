import React, { useMemo } from 'react';
import { ICarousel } from './types';

import { ListItems } from './ListItems';
import * as S from './ListGroup.style';

interface ListGroupProps extends ICarousel {
  pageIndex: number;
}

export const ListGroup = ({ pageIndex, movies, genre }: ListGroupProps) => {
  return (
    <S.Ul pageIndex={pageIndex}>
      {useMemo(() => {
        return movies.map((movie, idx) => (
          <ListItems
            key={`${genre}-board-${idx}`}
            movie={movie}
            genre={genre}
          />
        ));
      }, [movies, genre])}
    </S.Ul>
  );
};
