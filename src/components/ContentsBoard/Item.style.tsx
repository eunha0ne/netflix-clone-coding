import styled from '@emotion/styled';

interface IProps {
  isEnter: boolean;
}

export const Li = styled.li`
  margin: 45px 4px 4px;
  width: calc(20% - 8px);
  box-sizing: border-box;
  background: rgba(200, 200, 200, 0.1);
  font-size: 0;
  text-align: center;

  &:nth-of-type(-n + 5) {
    margin-top: 0;
    padding-top: 0;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 0;
  padding: 0;
  padding-bottom: 53.333%;
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  border: none;
  background: none;
  font-size: 0;
`;

export const Img = styled.img<IProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transition: transform 300ms;
  transform: ${({ isEnter }) => (isEnter ? `scale(1);` : `scale(0.8);`)};
`;
