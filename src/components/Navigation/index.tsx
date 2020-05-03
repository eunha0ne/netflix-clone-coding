import React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './index.style';

interface ILink {
  path: string;
  children: string;
}

const MenuLink = ({ path, children }: ILink) => {
  return (
    <li>
      <NavLink exact to={path} activeClassName="is-active">
        {children}
      </NavLink>
    </li>
  );
};

export const Navigation = () => {
  return (
    <S.Nav>
      <S.Ul>
        <MenuLink path="/browse">홈</MenuLink>
        <MenuLink path="/browse/tv/71912">TV프로그램</MenuLink>
        <MenuLink path="/browse/movie/157336">영화</MenuLink>
        <MenuLink path="/browse/latest/653567">최신 콘텐츠</MenuLink>
        <MenuLink path="/my-list">내가 찜한 콘텐츠</MenuLink>
      </S.Ul>
    </S.Nav>
  );
};
