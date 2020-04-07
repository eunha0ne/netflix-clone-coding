import React, { useState, useRef, useEffect, useMemo } from 'react';
import { BACK_IMG_URL, SLIDE_PER_CARDS_LEN as CARDS_LEN } from '~/constants';

import { InObserver, InObserverClosure } from '~/utils/intersectionObserver';
import { IBillBoardProps, IMovie } from '~/features/billBoard/types';
import blankPath from '~/assets/images/blank.png';

import * as S from './index.style';

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

const ListGroup = ({ pageIndex, movies, genre }: IListProps) => {
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
      }, [movies])}
    </S.Ul>
  );
};

interface IListItem {
  movie: IMovie;
  genre: string;
}

const ListItems = ({ movie }: IListItem) => {
  const itemEl = useRef<HTMLLIElement>(null);
  const [imgPath, setImgPath] = useState(blankPath);

  let iO: InObserverClosure;
  const options = { threshold: 0.1 };
  const func = () => {
    const url = `${BACK_IMG_URL}/w500/${movie.poster_path}`;
    setImgPath(url);
    iO.disconnect();
  };

  useEffect(() => {
    if (itemEl.current) {
      iO = InObserver({
        target: itemEl.current,
        options: options,
        callback: func
      });

      iO.observe();
    }

    return () => iO.disconnect();
  }, [imgPath, itemEl.current, options]);

  return (
    <S.Li ref={itemEl}>
      <strong>{movie.title}</strong>
      <img src={imgPath} />
    </S.Li>
  );
};
