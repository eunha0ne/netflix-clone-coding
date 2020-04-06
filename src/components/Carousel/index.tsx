import React, { useEffect, ReactNode } from 'react';
import { BACK_IMG_URL } from '~/constants';

import { IBillBoardProps } from '~/features/billBoard/types';
import * as S from './index.style';

interface ICarousel {
  children: ReactNode;
}

export const Carousel = (props: IBillBoardProps) => {
  return (
    <div>
      <button>이전 슬라이드</button>
      <MoiveGroup {...props} />
      <button>다음 슬라이드</button>
    </div>
  );
};

const MoiveGroup = ({ movies, genre }: IBillBoardProps) => {
  // useEffect(() => {

  // }, [])

  return (
    <ul>
      {movies.map((movie, idx) => {
        const imgPath = `${BACK_IMG_URL}/w500/${movie.poster_path}`;

        return (
          <li key={`${genre}-board-${idx}`}>
            <strong>{movie.title}</strong>
            <img src={imgPath} />
          </li>
        );
      })}
    </ul>
  );
};
