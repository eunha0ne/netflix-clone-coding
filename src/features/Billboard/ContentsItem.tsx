import React, { useRef, useState, useEffect } from 'react';
import { IMovie } from '~/features/common/types';

import { InObserver, InObserverClosure } from '~/utils/intersectionObserver';
import { IMG_URL } from '~/constants';

import blankPath from '~/assets/images/blank.png';
import * as S from './ContentsItem.style';

interface ContentsItemProps {
  movie: IMovie;
}

export const ContentsItem = ({ movie }: ContentsItemProps) => {
  const itemEl = useRef<HTMLLIElement>(null);
  const [imgPath, setImgPath] = useState(blankPath);
  const backPath = movie.backdrop_path;

  useEffect(() => {
    const iO: InObserverClosure = InObserver({
      target: itemEl.current!,
      options: { threshold: 0.1 },
      callback: () => {
        const url = `${IMG_URL}/w300/${backPath}`;
        setImgPath(url);
        iO.disconnect();
      }
    });

    if (imgPath !== backPath) {
      iO.observe();
    }

    return () => iO.disconnect();
  }, [itemEl, imgPath, backPath]);

  return (
    <S.Li ref={itemEl}>
      <S.Img src={imgPath} alt={movie.title} />
    </S.Li>
  );
};
