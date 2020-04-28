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
    isBlur ? `none` : `1px solid rgba(200, 200, 200, 1)`};
  box-sizing: border-box;
  background: ${({ isBlur }: LabelProps) => (isBlur ? `none` : `black`)};
  transition: width 300ms, background 300ms;
  transition-delay: ${({ isBlur }: LabelProps) => (isBlur ? `1000ms, 0` : `0`)};

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
    display: ${({ isBlur }: LabelProps) => (isBlur ? `none` : `black`)};
    right: 0;
    top: 0;
    height: 100%;

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
  padding: ${({ isBlur }: LabelProps) => (isBlur ? `0` : `5px`)};
  vertical-align: middle;
  width: ${({ isBlur }: LabelProps) =>
    isBlur ? `0%` : `calc(100% - 2.5rem - 10px)`};
  height: 2.5rem;
  font-size: 1.4rem;
  color: white;
  background: black;
  border: none;
  outline: none;

  ${hideInputXButton};
`;
