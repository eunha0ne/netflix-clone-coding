import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchKeyVisual, IKeyVisual } from './keyVisualSlice';
import { KeyVisualContents } from './KeyVisualContents';

export const KeyVisual = () => {
  const dispatch = useDispatch();
  const keyVisual = useSelector((state: RootState) => state.keyVisual);
  const { loading, movie }: IKeyVisual = keyVisual;
  let wrapper: JSX.Element | null = null;

  useEffect(() => {
    if (!movie) {
      dispatch(fetchKeyVisual());
    }
  }, [loading, movie, dispatch]);

  switch (loading) {
    case 'idle':
    case 'pending': {
      wrapper = <p>콘텐츠 준비 중입니다.</p>;
      break;
    }

    case 'error': {
      wrapper = <p>콘텐츠를 가져오는데 실패했습니다.</p>;
      break;
    }

    default: {
      wrapper = movie ? <KeyVisualContents {...movie} /> : null;
    }
  }

  return wrapper;
};
