import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from '~/components/Navigation';
import { Menu } from '~/components/Menu';

import { throttle, combinedThrottle } from '~/utils/throttle';

import * as S from './index.style';

export const Header = () => {
  const checkScrollTop = () => {
    const htmlTag = document.documentElement;
    const scrollTop = htmlTag.scrollTop;

    const top = htmlTag.getBoundingClientRect().top;

    console.log(scrollTop, '/', top);
  };

  const throttleScroll = combinedThrottle(checkScrollTop, 1000);

  useEffect(() => {
    window.addEventListener('scroll', throttleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttleScroll);
  }, []);

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
