import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 0 4%;
  position: relative;
  overflow: hidden;
`;

interface ButtonProps {
  arrowDir: 'PREV' | 'NEXT';
}

export const Button = styled.button`
  z-index: 10;
  position: absolute;
  top: 0;
  ${({ arrowDir }: ButtonProps) =>
    arrowDir === 'PREV' ? 'left: 0;' : 'right: 0;'}

  width: 4%;
  height: 100%;
  box-sizing: border-box;
  border: none;
  transition: background 300ms;
  background-color: rgba(0, 0, 0, 0.75);
  transform: ${({ arrowDir }: ButtonProps) =>
    arrowDir === 'PREV' ? 'translateX(-4px);' : 'translateX(4px);'};

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

interface UlProps {
  pageIndex: number;
}

export const Ul = styled.ul`
  z-index: 1;
  position: relative;
  white-space: nowrap;
  transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  ${({ pageIndex }: UlProps) => {
    const shift = 100 * pageIndex;
    return `transform: translate3d(-${shift}%, 0, 0);`;
  }}
`;

export const Li = styled.li`
  padding: 0 4px;
  position: relative;
  display: inline-block;
  width: 20%;
  height: 30vw;
  box-sizing: border-box;
  white-space: normal;
  vertical-align: top;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }

  strong {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
