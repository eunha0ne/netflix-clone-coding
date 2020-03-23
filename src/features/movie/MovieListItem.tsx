import React, { useRef, useEffect, useState } from 'react';
import { BACK_IMG_URL } from '~/constants';
import { IMovie } from './types';

import blank from '~/static/images/blank.png';
import styled from '@emotion/styled';

interface IMoiveItem extends IMovie {
  idx: number;
  isLastItem?: boolean;
  loadItem?: CallableFunction;
}

export const MovieListItem = (props: IMoiveItem) => {
  const { name, backdrop_path } = props;
  const [imgSrc, setImgSrc] = useState<string>(blank);
  const targetEl = useRef(null);

  useEffect(() => {
    const options = { threshold: 0.25 };
    const entries = targetEl.current;
    const iO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          const URL = `${BACK_IMG_URL}/original/${backdrop_path}`;
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
  }, [targetEl]);

  return (
    <li ref={targetEl}>
      <article>
        <header>
          <h3>{name}</h3>
        </header>
        <S.Img src={imgSrc} />
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
