import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IObserver, IObserverClosure } from '~/utils/intersectionObserver';

import { fetchModal } from '~/features/Modal/modalSlice';
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
  const dispatch = useDispatch();

  const itemEl = useRef<HTMLLIElement>(null);
  const [imgPath, setImgPath] = useState(blankPath);
  const backPath = movie.backdrop_path;

  useEffect(() => {
    const iO: IObserverClosure = IObserver({
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
      <button
        aria-label={movie.title}
        onClick={() => dispatch(fetchModal({ movie }))}
      >
        <S.Img src={imgPath} alt="" />
      </button>
    </S.Li>
  );
};
