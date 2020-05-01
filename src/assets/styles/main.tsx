import React, { SFC } from 'react';

import styled from '@emotion/styled';

interface IMain {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

const StyledMain: SFC<IMain> = ({ className, children }) => {
  return (
    <div className={className} role="main">
      {children}
    </div>
  );
};

export const Main = styled(StyledMain)<IMain>`
  position: relative;
  min-height: 20vw;
  box-sizing: border-box;
`;
