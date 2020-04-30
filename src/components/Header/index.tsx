import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from '~/components/Navigation';
import { Menu } from '~/components/Menu';

import { throttle } from '~/utils/throttle';

import * as S from './index.style';

export const Header = () => {
  const checkScrollTop = () => {
    const htmlTag = document.documentElement;
    const scrollTop = htmlTag.scrollTop;

    console.log(htmlTag, scrollTop);
  };

  const throttleScroll = throttle(checkScrollTop, 300);

  useEffect(() => {
    window.addEventListener('scroll', throttleScroll);
    console.log('/mounted');

    return () => {
      window.removeEventListener('scroll', throttleScroll);
      console.log('/unmounted');
    };
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
