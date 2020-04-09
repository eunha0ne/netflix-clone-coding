import React, { useRef, useState, useEffect, useMemo } from 'react';

import { InObserver, InObserverClosure } from '~/utils/intersectionObserver';
import { IMovie } from '~/features/common/types';
import { IMG_URL } from '~/constants';

import blankPath from '~/assets/images/blank.png';
import * as S from './ContentsItem.style';

interface ContentsItemProps {
  movie: IMovie;
  idx: number;
  loadPage?: CallableFunction;
}

export const ContentsItem = ({ movie, loadPage }: ContentsItemProps) => {
  const itemEl = useRef<HTMLLIElement>(null);
  const [imgPath, setImgPath] = useState(blankPath);
  const backPath = movie.backdrop_path;

  useEffect(() => {
    const iO: InObserverClosure = InObserver({
      target: itemEl.current!,
      options: { threshold: 0.05 },
      callback: () => {
        const URL = `${IMG_URL}/w300/${backPath}`;
        setImgPath(URL);
        loadPage && loadPage();
        iO.disconnect();
      }
    });

    if (imgPath === blankPath) {
      iO.observe();
    }

    return () => iO.disconnect();
  }, [itemEl, imgPath, backPath, loadPage]);

  return (
    <S.Li ref={itemEl}>
      <a arai-label={movie.title} onClick={() => {}}>
        <S.Img src={imgPath} alt="" />
      </a>
    </S.Li>
  );
};
