import React from 'react';
import Navigation from '~/components/Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>React Movie Finder</h1>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>Created by @eunha0ne</footer>
    </>
  );
};

export default Layout;
