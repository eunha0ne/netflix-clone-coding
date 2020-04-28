import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/rootReducer';

import { Modal } from '~/components/Modal';
import { Detail } from '~/features/Detail';
import { Header } from '~/components/Header';

import * as S from './index.style';
import 'normalize.css';

interface ILayout {
  children: JSX.Element;
}

export const Layout = ({ children }: ILayout) => {
  const { isPopupOpen, backPath } = useSelector((state: RootState) => ({
    isPopupOpen: state.modal.isOpen,
    backPath: state.detail.data?.backdrop_path
  }));

  return (
    <>
      <S.Global />

      <div className="app">
        <Header />
        {children}
        <Footer />
      </div>

      {isPopupOpen && (
        <Modal backPath={backPath}>
          <Detail />
        </Modal>
      )}
    </>
  );
};

const Footer = () => {
  return <footer>Created by @eunha0ne</footer>;
};

export default Layout;
