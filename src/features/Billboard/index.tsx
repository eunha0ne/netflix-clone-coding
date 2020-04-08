import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { IBillboard } from './types';
import { fetchBillboard } from './billboardSlice';

import { BillboardContents } from './BillboardContents';
import { BILLBOARD_ITEMS_LEN, BILLBOARD_MAX_LEN } from '~/constants';

export const Billboard = (props: IBillboard) => {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1);

  const { menuName } = props;
  const { movies } = useSelector((state: RootState) => ({
    movies: state.billboard[menuName].data
  }));

  useEffect(() => {
    const isLoaded = movies.length === pageNum * BILLBOARD_ITEMS_LEN;
    const isContentsEnd = pageNum === BILLBOARD_MAX_LEN;

    if (!isLoaded && !isContentsEnd) {
      dispatch(fetchBillboard({ ...props, page: pageNum }));
    }
  }, [dispatch, pageNum, movies, props]);

  return (
    <section>
      <h2>추천 콘텐츠</h2>
      <BillboardContents loadPage={() => setPageNum(pageNum + 1)} />
    </section>
  );
};
