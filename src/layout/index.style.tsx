import React from 'react';
import { Global as _Global, css } from '@emotion/core';

const cssText = css`
  html {
    font-size: 62.5%;
  }

  html,
  body {
    background-color: #141414;
    color: white;
  }

  a {
    color: white;
    text-decoration: underline;
  }
`;

export const Global = () => {
  return <_Global styles={cssText} />;
};
