import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '~/components/Navigation';
import { Menu } from '~/components/Menu';

import * as S from './index.style';

export const Header = () => (
  <>
    <S.Header>
      <S.H1>
        <Link to="/">
          <span>Netflix Clone Coding</span>
        </Link>
      </S.H1>

      <Navigation />
      <Menu />
    </S.Header>
  </>
);
