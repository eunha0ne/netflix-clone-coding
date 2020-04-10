import styled from '@emotion/styled';
import { IMG_URL } from '~/constants';

export const Background = styled.div`
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.75;
  }
`;

interface WrapperProps {
  backPath: string | null;
}

export const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  width: 100%;
  height: 55vh;
  color: white;
  background-color: black;
  transform: translate(-50%, -50%);

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &:before {
    z-index: 1;
    left: 0;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 70%
    );
  }

  &:after {
    content: '';
    z-index: 0;
    right: 0;
    position: absolute;
    width: 70%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    ${({ backPath }: WrapperProps) =>
      backPath && `background-image: url(${IMG_URL}/original/${backPath});`};
  }
`;

export const Article = styled.article`
  z-index: 1;
  padding: 1.5rem 0 0 4%;
  position: relative;
  width: 45%;
  height: 100%;
  overflow: hidden;
  font-size: 1.3vw;
  line-height: 1.6;
  box-sizing: border-box;

  .title {
    font-size: 2.4vw;
  }

  .release-date {
    font-size: 1.1vw;
  }

  .contents {
    margin-top: 1.5rem;
  }

  button {
    width: 100px;
    height: 100px;
  }
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  z-index: 1;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  height: 100px;
  border: none;
  background: none;
  color: white;

  &:hover {
    svg {
      transform: translate(-50%, -50%) rotate(180deg);
      transition: transform 300ms;
    }
  }

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    transform-origin: center;
  }
`;
