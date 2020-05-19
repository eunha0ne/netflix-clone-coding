import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useArrangePlayer } from './useArrangePlayer';
import { useCreatePlayer } from './useCreatePlayer';

import { RootState } from '~/app/rootReducer';
import { IResource } from '~/app/types';
import { fetchVideo } from '~/features/Detail/detailSlice';

import * as S from './index.style';

// TODO: 기존 로직을 feature에 위임 필요
export const VideoPlayer = ({ mediaType, id }: IResource) => {
  const dispatch = useDispatch();

  //  const [isSoundOn, setIsSoundOn] = useState(false);
  const wrapperEl = useRef<HTMLDivElement>(null);
  const { video } = useSelector((state: RootState) => ({
    video: state.video.data
  }));

  useEffect(() => {
    dispatch(fetchVideo({ mediaType, id }));
  }, [dispatch, mediaType, id]);

  useArrangePlayer();
  useCreatePlayer({ wrapperEl, video });
  // { btnSound } = useCreatePlayer({ wrapperEl, video, isSoundOn });
  // useCreatePlayer, usePlayerManager, usePlayerHandler ???

  return useMemo(
    () => (
      <S.PlayerWrapper ref={wrapperEl}>
        <div>
          <button>CUSTOM BUTTON</button>
        </div>
        <div id="playerMountedPoint"></div>
      </S.PlayerWrapper>
    ),
    []
  );
};
