import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const animation = keyframes`
  0%   {background-color: rgba(50,50,50,.2)}
  50%  {background-color: rgba(50,50,50,.6)}
  100% {background-color: rgba(50,50,50,.2)}
`;

export const Loading = styled.div`
  z-index: 9;
  padding: 0 4%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  ul {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    width: 75vw;
  }
`;

export const Item = styled.div`
  margin: 0.3vw;
  width: 15vw;
  height: 8vw;
  animation: ${animation} 1200ms ease infinite;

  &:nth-of-type(1) {
    animation-delay: 0;
  }

  &:nth-of-type(2) {
    animation-delay: 100ms;
  }

  &:nth-of-type(3) {
    animation-delay: 200ms;
  }

  &:nth-of-type(4) {
    animation-delay: 300ms;
  }

  &:nth-of-type(5) {
    animation-delay: 400ms;
  }
`;
