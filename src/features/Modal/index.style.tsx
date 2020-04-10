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

interface WrapperProps {
  backPath: string | null;
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
  width: 40%;
  height: 100%;
  overflow: hidden;
  font-size: 1.1vw;
  line-height: 1.6;
  box-sizing: border-box;

  .title {
    font-size: 2.1vw;
  }

  .contents {
    margin-top: 1.5rem;
    max-height: 50%;
  }
`;

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

export const PlusBtn = styled.button`
  margin-top: 1vw;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  background: rgba(100, 100, 100, 0.5);
  border: none;
  border-radius: 5px;

  &:hover {
    background: rgba(50, 50, 50, 0.5);
  }
`;
