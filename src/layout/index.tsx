import React from 'react';

import { Header } from '~/components/Header';
import { DetailPopup } from '~/features/Detail/index';

import * as S from './index.style';
import 'normalize.css';

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <S.Global />
      <div className="app">
        <Header />
        {children}
        <Footer />
      </div>

      <DetailPopup />
    </>
  );
};

const Footer = () => {
  return <footer>Created by @eunha0ne</footer>;
};

export default Layout;
