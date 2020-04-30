import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from '~/components/Navigation';
import { Menu } from '~/components/Menu';

import { useScroll } from '~/hooks/useScroll';

import * as S from './index.style';

export const Header = () => {
  const isTop = useScroll(100);

  console.log('isTop', isTop);

  return (
    <S.Header>
      <S.H1>
        <Link to="/">
          <span>Netflix Clone Coding</span>
        </Link>
      </S.H1>

      <Navigation />
      <Menu />
    </S.Header>
  );
};
