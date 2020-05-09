import styled from '@emotion/styled';

interface UlProps {
  pageIndex: number;
}

export const Ul = styled.ul<UlProps>`
  z-index: 1;
  position: relative;
  white-space: nowrap;
  transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;

  ${({ pageIndex }) => {
    const shift = 100 * pageIndex;
    return `transform: translate3d(-${shift}%, 0, 0);`;
  }}
`;
