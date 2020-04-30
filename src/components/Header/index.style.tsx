import styled from '@emotion/styled';
import logoPath from '~/assets/images/netflix_logo.png';

interface IProps {
  isTop: boolean;
  isGoingDown?: boolean;
}

export const Header = styled.header<IProps>`
  padding: 0 4%;
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 68px;
  box-sizing: border-box;
  background-color: ${({ isTop }) =>
    isTop ? `none` : `rgba(20, 20, 20, 0.9)`};
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  transform: ${({ isGoingDown }) =>
    isGoingDown ? `translateY(-68px)` : `translateY(0)`};
  transition: background-color 600ms 100ms, transform 300ms 0ms;
`;

export const H1 = styled.h1`
  margin-right: 25px;
  font-size: 0;
  width: 94px;
  height: 100%;
  background: url(${logoPath}) no-repeat center / contain;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;
