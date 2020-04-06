import React from 'react';
import { KeyVisual } from '~/features/keyVisual';
import { BillBoard } from '~/features/billBoard';

const Home = () => {
  return (
    <main>
      <KeyVisual viewName={'home'} genre={'movie'} id={4935} />
      <BillBoard viewName={'home'} genre={'movie'} />
    </main>
  );
};

export { Home as default };
