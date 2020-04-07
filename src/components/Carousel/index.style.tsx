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
  background-color: rgba(0, 0, 0, 0.75);
  transform: ${({ arrowDir }: ButtonProps) =>
    arrowDir === 'PREV' ? 'translateX(-4%);' : 'translateX(4%);'};

  &:hover {
    svg {
      opacity: 1;
    }
  }

  svg {
    position: absolute;
    ${({ arrowDir }: ButtonProps) =>
      arrowDir === 'PREV' ? 'left: 0;' : 'right: 0;'}
    top: 50%;
    transform: translateY(-50%);
    color: white;
    opacity: 0;
    transition: opacity 300ms;
  }
`;
