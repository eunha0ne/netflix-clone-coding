import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { IBillboard } from './types';
import { fetchBillboard } from './billboardSlice';

import { Contents } from './Contents';
import * as S from './index.style';
import {
  BILLBOARD_ITEMS_LEN as ITEMS_LEN,
  BILLBOARD_MAX_LEN
} from '~/constants';

export const Billboard = (props: IBillboard) => {
  const dispatch = useDispatch();

  const { menuName, sectionTitle } = props;
  const { movies, currPageNum } = useSelector((state: RootState) => ({
    currPageNum: state.billboard[menuName].page,
    movies: state.billboard[menuName].data
  }));
  const [pageNum, setPageNum] = useState(currPageNum);

  useEffect(() => {
    const nextPage = pageNum + 1;
    const isLoaded = movies.length + ITEMS_LEN >= nextPage * ITEMS_LEN;
    const isContentsEnd = nextPage >= BILLBOARD_MAX_LEN;

    if (!isLoaded && !isContentsEnd) {
      dispatch(fetchBillboard({ ...props, page: nextPage }));
    }
  }, [dispatch, pageNum, movies, props]);

  return useMemo(
    () => (
      <S.Section>
        <h2 className="section-title">{sectionTitle}</h2>
        <Contents movies={movies} loadPage={() => setPageNum(pageNum + 1)} />
      </S.Section>
    ),
    [movies, pageNum, sectionTitle]
  );
};
