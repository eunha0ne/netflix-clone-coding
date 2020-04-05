import { BACK_IMG_URL } from '~/constants';
import styled from '@emotion/styled';

export const Section = styled.section`
  padding-bottom: 90vh;
  width: 100%;
  overflow: hidden;
`;

interface IBackground {
  backPath?: string | null;
  dir?: 'default' | 'reverse';
}

export const Background = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &:before {
    z-index: 1;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 1) 90%
    );
  }

  &:after {
    z-index: 0;
    background-repeat: no-repeat;
    background-size: cover;

    ${({ backPath }: IBackground) =>
      backPath &&
      `background-image: url(${BACK_IMG_URL}/original/${backPath});`};

    ${({ dir }: IBackground) =>
      dir === 'default'
        ? 'background-position: 0vw center; transform: scaleX(1);'
        : 'background-position: -10vw; transform: scaleX(-1);'};
  }
`;

export const Contents = styled.div`
  padding: 0 4%;
  z-index: 1;
  position: absolute;
  left: 0;
  bottom: 35%;
  width: 36%;
  height: 50%;
  font-size: 2rem;
  line-height: 1.4;
`;
