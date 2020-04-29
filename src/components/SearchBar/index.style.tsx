import styled from '@emotion/styled';

import { hideInputXButton } from '~/assets/styles/utils';

interface LabelProps {
  isBlur: boolean;
}

export const Label = styled.label`
  cursor: pointer;
  padding: 5px;
  position: relative;
  display: inline-block;
  width: ${({ isBlur }: LabelProps) => (isBlur ? `50px` : `250px`)};
  height: 100%;
  font-size: 0;
  white-space: nowrap;
  border: ${({ isBlur }: LabelProps) =>
    isBlur
      ? `1px solid rgba(200, 200, 200, 0)`
      : `1px solid rgba(200, 200, 200, 1)`};
  box-sizing: border-box;
  background: ${({ isBlur }: LabelProps) => (isBlur ? `none` : `black`)};
  transition: ${({ isBlur }: LabelProps) =>
    isBlur
      ? `width 300ms 1000ms, background 300ms 1000ms, border 0ms 1000ms`
      : `width 300ms 0ms, background 300ms 0ms, border 300ms 0ms`};

  &:after {
    content: '';
    display: table;
    clear: both;
  }

  > svg {
    display: inline-block;
    vertical-align: middle;
  }

  .clear-btn {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    opacity: ${({ isBlur }: LabelProps) => (isBlur ? 0 : 1)};
    transition: ${({ isBlur }: LabelProps) =>
      isBlur ? `opacity 300ms 1000ms` : `opacity 300ms 0`};

    > svg {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const Input = styled.input`
  float: right;
  padding: 3px;
  vertical-align: middle;
  width: ${({ isBlur }: LabelProps) =>
    isBlur ? `0%` : `calc(100% - 2.5rem - 10px)`};
  height: 2.5rem;
  font-size: 1.4rem;
  color: white;
  background: black;
  border: none;
  outline: none;
  transition: ${({ isBlur }: LabelProps) =>
    isBlur ? `width 300ms 1000ms` : `width 300ms 0`};

  ${hideInputXButton};
`;
