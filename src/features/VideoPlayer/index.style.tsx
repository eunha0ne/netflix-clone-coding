import styled from '@emotion/styled';

export const PlayerWrapper = styled.div`
  &:before {
    content: '';
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
  }

  &.is-enter {
    iframe {
      opacity: 1;
    }
  }

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
`;
