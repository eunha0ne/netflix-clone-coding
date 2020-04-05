import React from 'react';
import { Global as GLOBAL, css } from '@emotion/core';

const cssText = css`
  html {
    font-size: 62.5%;
  }

  html,
  body {
    user-select: none;
    position: relative;
    color: white;
    background-color: #141414;
    word-break: keep-all;
  }

  a {
    color: white;
    text-decoration: underline;
  }

  .blind {
    margin: -1px;
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    font-size: 0;
  }
`;

export const Global = () => {
  return <GLOBAL styles={cssText} />;
};
