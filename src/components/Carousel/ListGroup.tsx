import React, { useMemo } from 'react';
import { IBillBoardProps } from '~/features/billBoard/types';

import { ListItems } from './ListItems';
import * as S from './ListGroup.style';

interface IListProps extends IBillBoardProps {
  pageIndex: number;
}

export const ListGroup = ({ pageIndex, movies, genre }: IListProps) => {
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
