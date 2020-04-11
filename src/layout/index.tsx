import React from 'react';

import { DetailPopup } from '~/features/Detail/DetailPopup';
import { Header } from '~/components/Header';
import { Loading } from '~/components/Loading';

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
      <Loading />
    </>
  );
};

const Footer = () => {
  return <footer>Created by @eunha0ne</footer>;
};

export default Layout;
