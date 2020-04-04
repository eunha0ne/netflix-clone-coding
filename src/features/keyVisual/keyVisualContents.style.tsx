import { BACK_IMG_URL } from '~/constants';
import styled from '@emotion/styled';

interface ImageProps {
  backPath: string | null;
}

export const Wrapper = styled.div`
  position: relative;
  height: 56.25vw;

  &:before {
    content: '';
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 1) 90%
    );
  }

  &:after {
    content: '';
    z-index: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: -10vw;
    ${(props: ImageProps) =>
      props.backPath &&
      `background-image: url(${BACK_IMG_URL}/original/${props.backPath});`};
    transform: scaleX(-1);
  }

  .visual {
    padding: 5vw;
    padding-top: 10vw;
    z-index: 1;
    position: relative;
    font-size: 1.6rem;
    line-height: 1.4;
    width: 36%;
    word-break: keep-all;

    &__btns {
      margin-top: 15px;
    }
  }
`;
