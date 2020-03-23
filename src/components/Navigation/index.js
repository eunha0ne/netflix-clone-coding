import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './index.style';

export const Navigation = () => {
  return (
    <S.Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </S.Nav>
  );
};
