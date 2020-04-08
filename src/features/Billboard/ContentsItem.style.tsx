import styled from '@emotion/styled';
import { IMG_URL } from '~/constants';

export const Li = styled.li`
  margin-top: 3vw;
  padding: 0 4px;
  width: 20%;
  text-align: center;
  box-sizing: border-box;

  &:nth-of-type(-n + 5) {
    margin-top: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
`;
