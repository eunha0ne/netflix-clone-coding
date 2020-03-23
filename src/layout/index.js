import React from 'react';
import { Header } from '~/components/Header';

import './reset.css';
import 'normalize.css';
import '~/styles/index.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>Created by @eunha0ne</footer>
    </>
  );
};

export default Layout;
