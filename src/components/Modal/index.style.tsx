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

  .btn-groups {
    display: flex;
    flex-direction: row;
  }
`;

interface ModalProps {
  backPath?: string | null;
}

export const Modal = styled.div`
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
  width: 100%;
  height: 60vh;
  color: white;
  background-color: black;
  transform: translate(-50%, -50%);
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &:before {
    z-index: 2;
    left: 0;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 70%
    );
    transform: scale(1.01);
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
    ${({ backPath }: ModalProps) =>
      backPath && `background-image: url(${IMG_URL}/original/${backPath});`};
  }
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  z-index: 10;
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
