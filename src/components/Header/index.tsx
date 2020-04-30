import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from '~/components/Navigation';
import { Menu } from '~/components/Menu';

import { useScroll } from '~/hooks/useScroll';

import * as S from './index.style';

export const Header = () => {
  const { isTop, isGoingDown } = useScroll(100);
  const [isOnEye, setIsOnEye] = useState(true);

  return (
    <S.Header
      isTop={isTop}
      isGoingDown={isOnEye && isGoingDown}
      onBlur={() => setIsOnEye(true)}
      onFocus={() => setIsOnEye(false)}
    >
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
