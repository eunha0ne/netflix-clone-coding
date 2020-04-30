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
    width: 100%;
    overflow-x: hidden;
    color: white;
    background-color: #141414;
    word-break: keep-all;
  }

  body {
    overflow-y: hidden;
  }

  a {
    color: white;
    text-decoration: underline;
  }

  #root {
    overflow-y: hidden;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  p {
    padding: 0;
    margin: 0;
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
