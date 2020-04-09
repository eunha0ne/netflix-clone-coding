import React from 'react';

import { Header } from '~/components/Header';
import { Modal } from '~/features/Modal/index';

import * as S from './index.style';
import 'reset-css';

interface ILayout {
  children: string;
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

      <Modal />
    </>
  );
};

const Footer = () => {
  return <footer>Created by @eunha0ne</footer>;
};

export default Layout;
