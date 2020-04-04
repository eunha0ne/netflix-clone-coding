import styled from '@emotion/styled';

export const Nav = styled.nav``;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    padding-left: 1.6rem;
  }

  a {
    text-decoration: none;
    font-size: 1.3rem;

    &.is-active {
      font-weight: bold;
    }
  }
`;
