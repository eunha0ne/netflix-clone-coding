import React from 'react';
import Navigation from '~/components/Navigation';

import './index.css';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Netflix Clone Coding</h1>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>Created by @eunha0ne</footer>
    </>
  );
};

export default Layout;
