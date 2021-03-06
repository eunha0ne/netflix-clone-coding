import styled from '@emotion/styled';
import { IMG_URL } from '~/constants';

interface IBackground {
  backPath?: string | null;
  backDir: 'default' | 'reverse';
}

export const Background = styled.div<IBackground>`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 55vw;
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

  &:before {
    z-index: 9;
    height: 200%;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 1) 90%
    );
  }

  &:after {
    z-index: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;

    ${({ backPath }) =>
      backPath && `background-image: url(${IMG_URL}/original/${backPath});`};

    ${({ backDir }) =>
      backDir === 'default'
        ? 'background-position: 0vw center; transform: scaleX(1);'
        : 'background-position: -10vw; transform: scaleX(-1);'};
  }
`;

export const Contents = styled.div`
  padding: 0 4%;
  z-index: 10;
  position: absolute;
  left: 0;
  bottom: 27.5%;
  width: 36%;
  min-height: 50%;
  line-height: 1.4;
  text-shadow: black 2px 0 10px;

  .title {
    margin: 0;
    font-size: 2.6vw;
  }

  .subTitle {
    margin-top: 1.5rem;
    font-size: 1.6vw;
  }

  .overview {
    margin-top: 2.5rem;
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
  margin-top: 1.5rem;
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
    max-height: 3vw;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    text-align: center;
    font-size: 1.4vw;
    color: white;
    background: rgba(200, 200, 200, 0.25);
    transition: background 300ms;

    &:hover {
      background: rgba(100, 100, 100, 0.25);
    }

    &:nth-of-type(1) {
      min-width: 8vw;
    }

    &:nth-of-type(2) {
      min-width: 12vw;
    }

    svg {
      margin-right: 0.75rem;
    }
  }
`;
