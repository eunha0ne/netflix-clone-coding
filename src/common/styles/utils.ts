import { css } from '@emotion/core';

export const guideProperties = (props: string = 'red') => css`
  box-sizing: border-box;
  border: 1px solid ${props} !important;

  &:before &:after {
    box-sizing: border-box;
    border: 1px dashed ${props} !important;
  }
`;

export const guide = css`
  ${guideProperties('red')};

  > * {
    ${guideProperties('pink')};
  }
`;
