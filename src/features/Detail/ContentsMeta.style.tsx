import styled from '@emotion/styled';

export const Meta = styled.div`
  margin-top: 1.5rem;

  > div {
    display: flex;
    flex-direction: row;
    font-size: 1.1vw;
  }

  strong {
    font-weight: normal;
    margin-right: 1.5rem;
  }

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    margin-left: 1rem;
    white-space: nowrap;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;
