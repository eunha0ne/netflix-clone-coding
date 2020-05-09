import React, { useMemo } from 'react';

import { ICarousel } from './types';
import { ListItem } from './ListItem';

import * as S from './ListGroup.style';
import { CARDS_LEN_PER_SLIDE as CARDS_LEN } from '~/constants';

interface ListGroupProps extends ICarousel {
  pageIndex: number;
}

export const ListGroup = ({ movies, pageIndex, genre }: ListGroupProps) => {
  return (
    <S.Ul pageIndex={pageIndex}>
      {useMemo(
        () => (
          <ListItems movies={movies} pageIndex={pageIndex} genre={genre} />
        ),
        [movies, genre, pageIndex]
      )}
    </S.Ul>
  );
};

const ListItems = ({ movies, pageIndex, genre }: ListGroupProps) => {
  return (
    <>
      {movies.map((movie, idx) => {
        const itemGroupNumber = Math.floor(idx / CARDS_LEN);
        const isCurrentItem = pageIndex === itemGroupNumber;
        const tabindex = isCurrentItem ? 0 : -1;

        return (
          <ListItem key={idx} movie={movie} genre={genre} tabindex={tabindex} />
        );
      })}
    </>
  );
};
