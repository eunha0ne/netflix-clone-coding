import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 0 4%;
  position: relative;

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

interface ButtonProps {
  arrowDir: 'PREV' | 'NEXT';
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  z-index: 10;
  position: absolute;
  ${({ arrowDir }) => setLeft(arrowDir)}
  top: 0;

  width: 4%;
  height: 100%;
  box-sizing: border-box;
  border: none;
  background-color: rgba(0, 0, 0, 0.75);
  transform: ${({ arrowDir }) =>
    arrowDir === 'PREV' ? 'translateX(-4%);' : 'translateX(4%);'};

  svg {
    position: absolute;
    ${({ arrowDir }) => setLeft(arrowDir)}
    top: 50%;
    transform: translateY(-50%);
    color: white;
    opacity: 0;
    transition: opacity 300ms;
  }
`;

const setLeft = (arrowDir: string) =>
  arrowDir === 'PREV' ? 'left: 0;' : 'right: 0;';
