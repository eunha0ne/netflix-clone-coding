import React from 'react';
import { BACK_IMG_URL } from '~/constants';
import { IMovie } from './types';

import styled from '@emotion/styled';

export const MovieListItem = (props: IMovie) => {
  console.log(props);
  const { name, backdrop_path } = props;

  return (
    <li>
      <article>
        <header>
          <h3>{name}</h3>
        </header>
        <Img
          className="temp-img"
          src={`${BACK_IMG_URL}/original/${backdrop_path}`}
        />
      </article>
    </li>
  );
};

const Img = styled('img')`
  width: 300px;
  height: auto;
`;
