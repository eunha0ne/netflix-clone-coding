import React from 'react';
import { Header } from '~/components/Header';
import * as S from './index.style';
import 'reset-css';

interface ILayout {
  children: string;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <S.Global />
      <Header />
      {children}
      <footer>Created by @eunha0ne</footer>
    </>
  );
};

export default Layout;
