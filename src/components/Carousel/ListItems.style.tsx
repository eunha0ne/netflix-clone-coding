import styled from '@emotion/styled';

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
