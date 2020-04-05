import React, { useRef, useEffect, useState } from 'react';
import { BACK_IMG_URL } from '~/constants';
import { IMovie } from './types';

import blankPath from '~/assets/images/blank.png';
import styled from '@emotion/styled';

interface IMoiveItem extends IMovie {
  idx: number;
  isLastItem?: boolean;
  loadItem?: CallableFunction;
}

export const MovieListItem = (props: IMoiveItem) => {
  const { name, backdrop_path, poster_path: posterPath } = props;
  const [imgSrc, setImgSrc] = useState<string>(blankPath);
  const targetEl = useRef(null);

  useEffect(() => {
    const options = { threshold: 0.25 };
    const entries = targetEl.current;
    const iO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          const URL = `${BACK_IMG_URL}/w500/${posterPath}`;
          const { isLastItem, loadItem } = props;

          if (isLastItem && loadItem !== undefined) {
            loadItem();
          }

          setImgSrc(URL);
          iO.disconnect();
        }
      });
    }, options);

    if (entries !== null) {
      iO.observe(entries);
    }

    return () => iO.disconnect();
  }, [props, targetEl, posterPath]);

  return (
    <S.Li ref={targetEl}>
      <h3>{name}</h3>
      <S.Img src={imgSrc} />
    </S.Li>
  );
};

const S = {
  Li: styled.li`
    padding: 0 4px;
    display: inline-block;
    width: 20%;
    height: 30vw;
    overflow: hidden;
    box-sizing: border-box;

    /* &:hover {
      transition: all 500ms;
      transform: translate3d(-25px, 0, 0);
    } */
  `,

  Img: styled('img')`
    width: 100%;
    height: 100%;
  `
};
