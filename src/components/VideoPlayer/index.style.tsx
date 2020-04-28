import styled from '@emotion/styled';

export const PlayerWrapper = styled.div`
  iframe {
    z-index: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 70%;
    height: 100%;
    opacity: 0;
    transition: opacity 600ms;
    transform: scale(2);
  }

  &.is-enter {
    iframe {
      opacity: 1;
    }
  }
`;
