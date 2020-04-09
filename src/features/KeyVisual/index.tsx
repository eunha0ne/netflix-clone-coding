import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchKeyVisual } from './keyVisualSlice';
import { IMovie } from '~/features/common/types';
import { IKeyVisual } from './types';

import { KeyVisualContents } from './KeyVisualContents';
import * as S from './KeyVisualContents.style';

export const KeyVisual = (props: IKeyVisual) => {
  const { menuName } = props;
  const dispatch = useDispatch();
  const { isLoading, isError, movie } = useSelector((state: RootState): {
    isLoading: boolean;
    isError: boolean;
    movie: IMovie | null;
  } => ({
    isLoading: state.keyVisual.isLoading,
    isError: state.keyVisual.isError,
    movie: state.keyVisual.views[menuName]
  }));

  useEffect(() => {
    if (!movie) {
      dispatch(fetchKeyVisual(props));
    }
  }, [dispatch, movie, props]);

  // 리팩토링 필요
  let contents: JSX.Element = <></>;
  if (isLoading || !movie) contents = <p>콘텐츠 준비 중입니다.</p>;
  else contents = <KeyVisualContents {...movie} menuName={menuName} />;

  if (isError) {
    contents = <p>콘텐츠를 가져오는데 실패했습니다.</p>;
  }

  return useMemo(() => {
    console.log('/k');
    return <S.Section>{contents}</S.Section>;
  }, [contents]);
};

// if (isOnline === null) {
//   return 'Loading...';
// }
// return isOnline ? 'Online' : 'Offline';
