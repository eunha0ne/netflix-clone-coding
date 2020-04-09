import styled from '@emotion/styled';

export const Li = styled.li`
  margin-top: 3vw;
  padding: 0 4px;
  width: 20%;
  text-align: center;
  box-sizing: border-box;

  &:nth-of-type(-n + 5) {
    margin-top: 0;
  }

  button {
    margin: 0;
    padding: 0;
    width: 100%;
    border: none;
    background: none;
    font-size: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
`;
