import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '~/components/Navigation';

import * as S from './index.style';

export const Header = () => {
  return (
    <>
      <S.Header>
        <Link to="/">
          <S.H1>Netflix Clone Coding</S.H1>
        </Link>
        <Navigation />
      </S.Header>
    </>
  );
};
