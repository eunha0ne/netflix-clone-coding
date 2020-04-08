import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { IBillboard } from './types';
import { fetchBillboard } from './billboardSlice';

import { Contents } from './Contents';

import {
  BILLBOARD_ITEMS_LEN as ITEMS_LEN,
  BILLBOARD_MAX_LEN
} from '~/constants';
import * as S from './index.style';

export const Billboard = (props: IBillboard) => {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(2);

  const { menuName, sectionTitle } = props;
  const { movies } = useSelector((state: RootState) => ({
    movies: state.billboard[menuName].data
  }));

  useEffect(() => {
    const isLoaded = movies.length + ITEMS_LEN === pageNum * ITEMS_LEN;
    const isContentsEnd = pageNum === BILLBOARD_MAX_LEN;

    if (!isLoaded && !isContentsEnd) {
      dispatch(fetchBillboard({ ...props, page: pageNum }));
    }
  }, [dispatch, pageNum, movies, props]);

  return (
    <S.Section>
      <h2 className="section-title">{sectionTitle}</h2>
      <Contents movies={movies} loadPage={() => setPageNum(pageNum + 1)} />
    </S.Section>
  );
};
