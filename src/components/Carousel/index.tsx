import React, { useState, useRef, ReactNode } from 'react';
import { BACK_IMG_URL, SLIDE_PER_CARDS_LEN as CARDS_LEN } from '~/constants';
import { InObserver } from '~/utils/intersectionObserver';
import blankPath from '~/assets/images/blank.png';

import { IBillBoardProps } from '~/features/billBoard/types';
import * as S from './index.style';

interface ICarousel {
  children: ReactNode;
}

export const Carousel = (props: IBillBoardProps) => {
  const { movies } = props;
  const [pageIndex, setPageIndex] = useState(0);

  const isAtStart = pageIndex > 0;
  const isAtEnd = pageIndex + 1 < movies.length / CARDS_LEN;
  const goPrev = () => isAtStart && setPageIndex(pageIndex - 1);
  const goNext = () => isAtEnd && setPageIndex(pageIndex + 1);

  return (
    <S.Wrapper>
      <S.Button arrowDir={'PREV'} onClick={goPrev}>
        <span className="blind">이전 슬라이드</span>
      </S.Button>

      <ListGroup {...props} pageIndex={pageIndex} />

      <S.Button arrowDir={'NEXT'} onClick={goNext}>
        <span className="blind">다음 슬라이드</span>
      </S.Button>
    </S.Wrapper>
  );
};

interface IListProps extends IBillBoardProps {
  pageIndex: number;
}

const ListGroup = (props: IListProps) => {
  const { pageIndex } = props;

  return (
    <S.Ul pageIndex={pageIndex}>
      <ListItems {...props} />
    </S.Ul>
  );
};

const ListItems = ({ movies, genre }: IListProps) => {
  const element = useRef(null);
  const Items = movies.map((movie, idx) => {
    const imgPath = `${BACK_IMG_URL}/w500/${movie.poster_path}`;

    return (
      <S.Li key={`${genre}-board-${idx}`}>
        <strong>{movie.title}</strong>
        <img src={imgPath} />
      </S.Li>
    );
  });

  // InObserver.observe({ entries: Items });

  return <>{Items}</>;
};
