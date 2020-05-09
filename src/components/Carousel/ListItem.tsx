import React, { useState, useRef, useEffect } from 'react';
import { IMovie } from '~/app/types';

import { IObserver, IObserverClosure } from '~/utils/intersectionObserver';
import { IMG_URL } from '~/constants';

import blankPath from '~/assets/images/blank.png';
import * as S from './ListItem.style';

interface IListItems {
  movie: IMovie;
  genre: string;
  tabindex: number;
}

export const ListItem = ({ movie, tabindex }: IListItems) => {
  const itemEl = useRef<HTMLLIElement>(null);
  const [imgPath, setImgPath] = useState(blankPath);
  const posterPath = movie.poster_path;

  useEffect(() => {
    const iO: IObserverClosure = IObserver({
      target: itemEl.current!,
      options: { threshold: 0.1 },
      callback: () => {
        const url = `${IMG_URL}/w500/${posterPath}`;
        setImgPath(url);
        iO.disconnect();
      }
    });

    if (imgPath === blankPath) {
      iO.observe();
    }

    return () => iO.disconnect();
  }, [itemEl, imgPath, posterPath]);

  return (
    <S.Li ref={itemEl}>
      <button className="btn" tabIndex={tabindex}>
        <img className="poster" src={imgPath} alt={movie.title} />
      </button>
    </S.Li>
  );
};
