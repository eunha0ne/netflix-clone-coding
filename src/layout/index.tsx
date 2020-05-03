import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/app/rootReducer';

import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { Modal } from '~/components/Modal';
import { Detail } from '~/features/Detail';

import 'normalize.css';
import * as S from './index.style';

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
