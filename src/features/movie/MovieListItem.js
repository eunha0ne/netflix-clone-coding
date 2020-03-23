import React, { useRef, useEffect, useState } from 'react';
import { BACK_IMG_URL } from '~/constants';
import { IMovie } from './types';

import styled from '@emotion/styled';

// interface IMoiveItem extends IMovie {
//   idx: number;
// }

export const MovieListItem = props => {
  const { name, backdrop_path } = props;
  const [imgSrc, setImgSrc] = useState(null);
  const targetEl = useRef(null);

  useEffect(() => {
    const iO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { target, isIntersecting } = entry;
        if (!isIntersecting) {
          return;
        }

        const URL = `${BACK_IMG_URL}/original/${backdrop_path}`;
        setImgSrc(URL);

        iO.disconnect();
      });
    });

    iO.observe(targetEl.current);
    return () => iO.disconnect();
  }, [targetEl]);

  return (
    <li ref={targetEl}>
      <article>
        <header>
          <h3>{name}</h3>
        </header>
        <S.Img className="temp-img placeholder" src={imgSrc} />
      </article>
    </li>
  );
};

const S = {
  Img: styled('img')`
    width: 300px;
    height: auto;
  `
};
