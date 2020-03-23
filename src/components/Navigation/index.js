import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './index.style';

export const Navigation = () => {
  return (
    <S.Nav>
      <S.Ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/tv">TV프로그램</Link>
        </li>
        <li>
          <Link to="/movie">영화</Link>
        </li>
        <li>
          <Link to="/movie">최신 콘텐츠</Link>
        </li>
        <li>
          <Link to="/movie">내가 찜한 콘텐츠</Link>
        </li>
      </S.Ul>
    </S.Nav>
  );
};
