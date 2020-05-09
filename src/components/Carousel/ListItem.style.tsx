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

  .btn {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 0;
    background: none;
    border: none;
  }

  .poster {
    width: 100%;
    height: 100%;
  }
`;
