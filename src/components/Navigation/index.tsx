import React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './index.style';

interface ILink {
  path: string;
  children: string;
  id?: number;
  isHomeMenu?: boolean;
}

const MenuLink = ({ path, children, id, isHomeMenu = false }: ILink) => {
  let URL = path;

  if (id) {
    // 동영상을 나타내는 id가 있는 경우,
    // path에 id를 합성해서 URL을 생성합니다.
    URL += `/${id}`;
  }

  return (
    <li>
      {isHomeMenu ? (
        <NavLink exact to={URL} activeClassName="is-active">
          {children}
        </NavLink>
      ) : (
        <NavLink
          to={URL}
          isActive={(match, location) => location.pathname.includes(path)}
          activeClassName="is-active"
        >
          {children}
        </NavLink>
      )}
    </li>
  );
};

export const Navigation = () => (
  <S.Nav>
    <S.Ul>
      <MenuLink isHomeMenu path="/browse">
        홈
      </MenuLink>
      <MenuLink path="/browse/tv" id={71912}>
        TV프로그램
      </MenuLink>
      <MenuLink path="/browse/movie" id={157336}>
        영화
      </MenuLink>
      <MenuLink path="/browse/latest" id={481848}>
        최신 콘텐츠
      </MenuLink>
      <MenuLink path="/my-list">내가 찜한 콘텐츠</MenuLink>
    </S.Ul>
  </S.Nav>
);
