import styled from '@emotion/styled';

export const PlayerWrapper = styled.div`
  iframe {
    opacity: 0;
    transition: opacity 600ms;
  }

  &.is-enter {
    iframe {
      opacity: 1;
    }
  }
`;
