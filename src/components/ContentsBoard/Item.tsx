import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { openModal } from '~/features/Modal/modalSlice';
import { fetchDetail } from '~/features/Detail/detailSlice';
import { IMovie } from '~/app/types';

import { IObserver, IObserverClosure } from '~/utils/intersectionObserver';
import { IMG_URL } from '~/constants';

import blankPath from '~/assets/images/blank.png';
import * as S from './Item.style';

interface ItemProps {
  movie: IMovie;
  idx: number;
  loadPage?: CallableFunction;
}

export const Item = ({ movie, loadPage }: ItemProps) => {
  const dispatch = useDispatch();

  const itemEl = useRef<HTMLLIElement>(null);
  const [imgPath, setImgPath] = useState(blankPath);
  const [isEnter, setIsEnter] = useState(false);
  const backPath = movie.backdrop_path;

  useEffect(() => {
    const iO: IObserverClosure = IObserver({
      target: itemEl.current!,
      options: { threshold: 0.05 },
      callback: () => {
        const URL = `${IMG_URL}/w300/${backPath}`;
        setImgPath(URL);
        setIsEnter(true);
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
      <S.Button
        aria-label={movie.title}
        onClick={() => {
          dispatch(openModal());
          dispatch(fetchDetail({ movie }));
        }}
      >
        <S.Img src={imgPath} alt="" isEnter={isEnter} />
      </S.Button>
    </S.Li>
  );
};
