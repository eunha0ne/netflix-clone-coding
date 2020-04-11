import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';

import { DetailPopup } from '~/features/Detail/DetailPopup';
import { Header } from '~/components/Header';

import * as S from './index.style';
import 'normalize.css';

interface ILayout {
  children: JSX.Element;
}

export const Layout = ({ children }: ILayout) => {
  const { isOpen } = useSelector((state: RootState) => ({
    isOpen: state.modal.isOpen
  }));

  return (
    <>
      <S.Global />
      <div className="app">
        <Header />
        {children}
        <Footer />
      </div>

      {isOpen && <DetailPopup />}
    </>
  );
};

const Footer = () => {
  return <footer>Created by @eunha0ne</footer>;
};

export default Layout;
