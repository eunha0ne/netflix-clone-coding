import { BACK_IMG_URL } from '~/constants';
import styled from '@emotion/styled';

export const Section = styled.section`
  padding-bottom: 45vw;
  width: 100%;
  overflow: hidden;
`;

interface IBackground {
  backPath?: string | null;
  backDir: 'default' | 'reverse';
}

export const Background = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 53vw;

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
      rgba(0, 0, 0, 0) 50%,
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

    ${({ backDir }: IBackground) =>
      backDir === 'default'
        ? 'background-position: 0vw center; transform: scaleX(1);'
        : 'background-position: -10vw; transform: scaleX(-1);'};
  }
`;

export const Contents = styled.div`
  padding: 0 4%;
  z-index: 1;
  position: absolute;
  left: 0;
  bottom: 27.5%;
  width: 36%;
  min-height: 50%;
  line-height: 1.4;
  text-shadow: black 2px 0 10px;

  .title {
    font-size: 2.6vw;
  }

  .subTitle {
    font-size: 1.6vw;
  }

  .overview {
    margin-top: 1rem;
    font-size: 1.3vw;
    line-height: 1.6;
  }
`;

export const ListGroup = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;

  li {
    cursor: pointer;
    padding: 0.5rem;
    margin-right: 0.75rem;
    min-width: 4vw;
    box-sizing: border-box;
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-align: center;
    font-size: 1.2vw;
    transition: background 300ms, border-color 300ms;

    &:hover {
      background: rgba(100, 100, 100, 0.5);
      border: 1px solid rgba(255, 255, 255, 0);
    }

    &:before {
      content: '#';
      margin-right: 0.25rem;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;

  button {
    cursor: pointer;
    margin-right: 1rem;
    padding: 0.75rem 1rem;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 11vw;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
    background: rgba(100, 100, 100, 0.5);
    color: white;
    font-size: 1.4vw;
    text-align: center;
    transition: background 300ms;

    &:hover {
      background: rgba(50, 50, 50, 0.5);
    }

    svg {
      margin-right: 0.75rem;
    }
  }
`;
