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

export const hideInputXButton = `
&::-ms-clear,
&::-ms-reveal {display: none; width : 0; height: 0;}
&::-webkit-search-decoration,
&::-webkit-search-cancel-button,
&::-webkit-search-results-button,
&::-webkit-search-results-decoration { display: none; }
`;
