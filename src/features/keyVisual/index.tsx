import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchKeyVisual, IKeyVisual } from './keyVisualSlice';
import { IMovie } from './types';

import { KeyVisualWrapper } from './KeyVisualWrapper';
import * as S from './index.style';

export const KeyVisual = () => {
  const dispatch = useDispatch();
  const keyVisual = useSelector((state: RootState) => state.keyVisual);
  const { isLoad, loading } = keyVisual;

  useEffect(() => {
    if (!isLoad) {
      dispatch(fetchKeyVisual());
    }
    console.log('keyVisual', keyVisual);
  }, [keyVisual, dispatch]);

  if (loading === 'pending') return <p>콘텐츠를 가져오는 중입니다.</p>;
  // if (isError) return <p>콘텐츠를 가져올 수 없습니다.</p>;
  return (
    <S.Wrapper backPath={null}>
      {/* <KeyVisualContents /> */}
      <BtnGroups />
    </S.Wrapper>
  );
};

const BtnGroups = () => (
  <>
    <button>재생</button>
    <button>상세 정보</button>
  </>
);
