import React from 'react';
import { IMovie } from '~/app/types';

import { Item } from './Item';
import * as S from './index.style';

interface ContentsProps {
  loadPage?: CallableFunction;
  movies: IMovie[];
  pageGenre: string;
}

export const ContentsBoard = ({
  movies,
  pageGenre,
  loadPage
}: ContentsProps) => {
  const lastIdx = movies.length - 1;

  return (
    <>
      <S.Ul>
        {movies.map((movie, idx) => {
          const data = { media_type: pageGenre, ...movie };
          const isContentEnough = movie.backdrop_path;
          const isLastItem = lastIdx === idx;

          if (isContentEnough && isLastItem) {
            return <Item key={idx} movie={data} loadPage={loadPage} />;
          } else if (isContentEnough) {
            return <Item key={idx} movie={data} />;
          } else return null;
        })}
      </S.Ul>
    </>
  );
};
