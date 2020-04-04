import React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './index.style';

interface ILink {
  path: string;
  children: string;
}

const Link = ({ path, children }: ILink) => {
  return (
    <li>
      <NavLink to={path} activeClassName="is-active">
        {children}
      </NavLink>
    </li>
  );
};

export const Navigation = () => {
  return (
    <S.Nav>
      <S.Ul>
        <Link path="/">홈</Link>
        <Link path="/tv">TV프로그램</Link>
        <Link path="/movie">영화</Link>
        <Link path="/latest">최신 콘텐츠</Link>
        <Link path="/my-list">내가 찜한 콘텐츠</Link>
      </S.Ul>
    </S.Nav>
  );
};
