import React, { useState, useRef, useEffect } from 'react';
import { InObserver, InObserverClosure } from '~/utils/intersectionObserver';
import { IMG_URL } from '~/constants';

import { IMovie } from '~/features/common/types';

import blankPath from '~/assets/images/blank.png';
import * as S from './ListItems.style';

interface IListItems {
  movie: IMovie;
  genre: string;
}

export const ListItems = ({ movie }: IListItems) => {
  const itemEl = useRef<HTMLLIElement>(null);
  const [imgPath, setImgPath] = useState(blankPath);
  const posterPath = movie.poster_path;

  useEffect(() => {
    const iO: InObserverClosure = InObserver({
      target: itemEl.current!,
      options: { threshold: 0.1 },
      callback: () => {
        const url = `${IMG_URL}/w500/${posterPath}`;
        setImgPath(url);
        iO.disconnect();
      }
    });

    if (imgPath !== posterPath) {
      iO.observe();
    }

    return () => iO.disconnect();
  }, [itemEl, imgPath, posterPath]);

  return (
    <S.Li ref={itemEl}>
      <img src={imgPath} alt={movie.title} />
    </S.Li>
  );
};
