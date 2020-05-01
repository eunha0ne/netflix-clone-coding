import styled from '@emotion/styled';

export const Article = styled.article`
  z-index: 2;
  padding: 1.5rem 0 0 4%;
  position: relative;
  width: 40%;
  height: 100%;
  overflow: hidden;
  font-size: 1.1vw;
  line-height: 1.6;
  box-sizing: border-box;

  .title {
    font-size: 2.1vw;
  }

  .contents {
    margin-top: 1.5rem;
    max-height: 50%;
  }
`;

export const BtnGroups = styled.div`
  margin-top: 1vw;
  padding: 0;
  display: inline-block;
  width: 100%;
  font-size: 0;

  button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 5rem;
    border: none;
    border-radius: 5px;
    font-size: 1.1vw;
    color: white;
    background: rgba(100, 100, 100, 0.5);
    transition: background 300ms;

    &:hover {
      background: rgba(50, 50, 50, 0.5);
    }

    &:first-of-type {
      margin-right: 10px;
    }
  }
`;
