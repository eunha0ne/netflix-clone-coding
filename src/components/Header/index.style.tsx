import styled from '@emotion/styled';
import logoPath from '~/assets/images/netflix_logo.png';

export const Header = styled.header`
  padding: 0 4%;
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 68px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
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
