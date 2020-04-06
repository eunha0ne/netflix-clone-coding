import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchKeyVisual, IKeyVisual } from './keyVisualSlice';
import { KeyVisualContents } from './KeyVisualContents';
import { IKeyVisualProps } from './types';

export const KeyVisual = ({ viewName, genre, id }: IKeyVisualProps) => {
  const dispatch = useDispatch();
  const keyVisual = useSelector((state: RootState) => state.keyVisual);
  const { isLoading, isError, views }: IKeyVisual = keyVisual;
  const data = views[viewName];

  useEffect(() => {
    if (!data) {
      dispatch(fetchKeyVisual({ viewName, genre, id }));
    }
  }, [dispatch, data, viewName, genre, id]);

  if (isLoading || !data) return <p>콘텐츠 준비 중입니다.</p>;
  if (isError) return <p>콘텐츠를 가져오는데 실패했습니다.</p>;
  return <KeyVisualContents {...data} viewName={viewName} />;
};
