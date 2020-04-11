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

export const Meta = styled.div`
  margin-top: 1.5rem;

  > div {
    display: flex;
    flex-direction: row;
    font-size: 1.1vw;
  }

  strong {
    font-weight: normal;
    margin-right: 1.5rem;
  }

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    margin-left: 1rem;
    white-space: nowrap;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export const PlusBtn = styled.button`
  margin-top: 1vw;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  background: rgba(100, 100, 100, 0.5);
  border: none;
  border-radius: 5px;

  &:hover {
    background: rgba(50, 50, 50, 0.5);
  }
`;
