import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchKeyVisual, IKeyVisual } from './keyVisualSlice';
import { IKeyVisualProps } from './types';

import { KeyVisualContents } from './KeyVisualContents';
import * as S from './KeyVisualContents.style';

export const KeyVisual = ({ viewName, genre, id, query }: IKeyVisualProps) => {
  const dispatch = useDispatch();
  const keyVisual = useSelector((state: RootState) => state.keyVisual);
  const { isLoading, isError, views }: IKeyVisual = keyVisual;
  const data = views[viewName];

  useEffect(() => {
    if (!data) {
      dispatch(fetchKeyVisual({ viewName, genre, id, query }));
    }
  }, [dispatch, data, viewName, genre, id, query]);

  let contents;
  if (isLoading || !data) contents = <p>콘텐츠 준비 중입니다.</p>;
  else contents = <KeyVisualContents {...data} viewName={viewName} />;
  if (isError) contents = <p>콘텐츠를 가져오는데 실패했습니다.</p>;

  return <S.Section>{contents}</S.Section>;
};
