import React, { useState, useRef, useEffect } from 'react';
import { InObserver, InObserverClosure } from '~/utils/intersectionObserver';
import { IMG_URL } from '~/constants';
import { IMovie } from '~/features/billBoard/types';

import blankPath from '~/assets/images/blank.png';
import * as S from './ListItems.style';

interface IListItems {
  movie: IMovie;
  genre: string;
}

export const ListItems = ({ movie }: IListItems) => {
  const itemEl = useRef<HTMLLIElement>(null);
  const [imgPath, setImgPath] = useState(blankPath);

  let iO: InObserverClosure;
  const options = { threshold: 0.1 };
  const func = () => {
    const url = `${IMG_URL}/w500/${movie.poster_path}`;
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

      console.log('/');

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
