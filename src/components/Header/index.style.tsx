import styled from '@emotion/styled';
import logoPath from '~/assets/images/netflix_logo.png';

export const Header = styled.header`
  padding: 0 4%;
  display: flex;
  align-items: center;
  height: 68px;
  background-color: rgb(20, 20, 20);
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
