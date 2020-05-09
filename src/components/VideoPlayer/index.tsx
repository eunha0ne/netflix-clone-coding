import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { IResource, IVideo } from '~/app/types';
import { fetchVideo } from '~/features/Detail/detailSlice';

import * as S from './index.style';

declare global {
  interface Window {
    YT: { loaded: number; Player: any };
  }
}

export const VideoPlayer = ({ mediaType, id }: IResource) => {
  const dispatch = useDispatch();

  const wrapperEl = useRef<HTMLDivElement>(null);
  const [isScriptLoad, setIsScriptLoad] = useState(false);
  const { video, isModalOpen } = useSelector((state: RootState) => ({
    video: state.detail.video,
    isModalOpen: state.modal.isOpen
  }));

  useEffect(() => {
    const oldPlayer = document.getElementById('playerMountedPoint');

    if (oldPlayer) {
      const playerWrapper = oldPlayer?.parentNode as HTMLElement;
      const newPlayer = document.createElement('div');

      newPlayer.id = 'playerMountedPoint';
      playerWrapper.classList.remove('is-enter');
      playerWrapper.removeChild(oldPlayer);
      playerWrapper.appendChild(newPlayer);
    }

    dispatch(fetchVideo({ mediaType, id }));
  }, [dispatch, mediaType, id]);

  useEffect(() => {
    const isReady = isScriptLoad && window.YT;
    let interval: NodeJS.Timeout;

    if (!isReady) {
      const scriptTag = document.getElementsByTagName('script')[0];
      const head = scriptTag?.parentNode;
      let tag = document.createElement('script');

      tag.src = 'https://www.youtube.com/iframe_api';
      tag.onload = () => {
        interval = setInterval(() => {
          if (window.YT.loaded === 1) {
            clearInterval(interval);
            setIsScriptLoad(true);
          }
        }, 30);
      };

      head?.insertBefore(tag, scriptTag);
    } else if (isReady && video) {
      createPlayer({ video, wrapperEl });
    }

    return () => {
      clearInterval(interval);
    };
  }, [isScriptLoad, video]);

  return useMemo(
    () => (
      <S.PlayerWrapper ref={wrapperEl}>
        <div id="playerMountedPoint"></div>
      </S.PlayerWrapper>
    ),
    []
  );
};

interface CreatePlayerProps {
  video: IVideo;
  wrapperEl: React.RefObject<HTMLDivElement>;
}

interface PlayerYT {
  target: any; // 실제로는 유투브 플레이어 객체로 인터페이스가 구현되어 있음
  data: number;
}

const createPlayer = ({ video, wrapperEl }: CreatePlayerProps) => {
  return new window.YT.Player('playerMountedPoint', {
    height: '360',
    width: '640',
    videoId: video.key,
    playerVars: { autoplay: 1, controls: 0 },
    events: {
      onReady: (player: PlayerYT) => {
        player.target.playVideo();
      },
      onStateChange: (player: PlayerYT) => {
        const wrapper = wrapperEl.current;
        const wrapperClasses = wrapper?.classList!;
        const isPlayState = player.data >= 1;

        isPlayState
          ? wrapperClasses.add('is-enter')
          : wrapperClasses.remove('is-enter');
      }
    }
  });
};
