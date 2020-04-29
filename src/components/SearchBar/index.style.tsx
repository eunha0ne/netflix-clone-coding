import React, { SFC } from 'react';
import styled from '@emotion/styled';

import { hideInputXButton } from '~/assets/styles/utils';

interface IProps {
  isBlur: boolean;
}

export const Label = styled.label<IProps>`
  cursor: pointer;
  padding: 5px;
  position: relative;
  display: inline-block;
  width: ${({ isBlur }) => (isBlur ? `50px` : `250px`)};
  height: 100%;
  overflow: hidden;
  font-size: 0;
  white-space: nowrap;
  border: ${({ isBlur }) =>
    isBlur
      ? `1px solid rgba(200, 200, 200, 0)`
      : `1px solid rgba(200, 200, 200, 1)`};
  box-sizing: border-box;
  background: ${({ isBlur }) => (isBlur ? `none` : `black`)};
  transition: ${({ isBlur }) =>
    isBlur
      ? `width 300ms 1000ms, background 300ms 1000ms, border 0ms 1000ms`
      : `width 300ms 0ms, background 300ms 0ms, border 300ms 0ms`};

  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const InputWrapper = styled.div<IProps>`
  float: right;
  position: relative;
  width: ${({ isBlur }) => (isBlur ? `0%` : `calc(100% - 2.5rem - 10px)`)};
  height: 2.5rem;
  transition: ${({ isBlur }) =>
    isBlur ? `width 300ms 1000ms` : `width 300ms 0`};
`;

export const Input = styled.input<IProps>`
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  color: white;
  background: black;
  border: none;
  outline: none;
  transition: ${({ isBlur }) =>
    isBlur ? `width 300ms 1000ms` : `width 300ms 0`};

  ${hideInputXButton};
`;

export const Placeholder = styled.span`
  z-index: 1;
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(200, 200, 200, 0.5);
  font-size: 1.3rem;
`;

interface IButton {
  onClick: () => void;
  onFocus: (event: React.FocusEvent<HTMLButtonElement>) => void;
  children: JSX.Element;
  isBlur: boolean;
  className?: string;
}

const StyledButton: SFC<IButton> = ({
  onFocus,
  onClick,
  children,
  className
}) => {
  return (
    <button onFocus={onFocus} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export const Button = styled(StyledButton)<IProps>`
  cursor: pointer;
  z-index: 1;
  position: absolute;
  right: 0;
  top: 0;
  width: calc(2.5rem + 10px);
  height: 100%;
  border: none;
  background: none;
  opacity: ${({ isBlur }) => (isBlur ? 0 : 1)};
  transform: ${({ isBlur }) =>
    isBlur ? `translateY(100px)` : `translateY(0)`};
  transition: ${({ isBlur }) =>
    isBlur
      ? `opacity 300ms 1000ms, transform 300ms 1000ms`
      : `opacity 300ms 0ms, transform 300ms 0ms`};

  > svg {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    background: none;
  }
`;
