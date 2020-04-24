import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { IVideo, IResource } from '~/app/types';
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
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isScriptLoad, setIsScriptLoad] = useState(false);
  const { video } = useSelector((state: RootState) => ({
    video: state.detail.video
  }));

  useEffect(() => {
    dispatch(fetchVideo({ mediaType, id }));
  }, [dispatch]);

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
            console.log('/load');
          }
        }, 30);
      };

      head?.insertBefore(tag, scriptTag);
    } else if (isReady && video) {
      const player = new window.YT.Player('playerMountedPoint', {
        height: '360',
        width: '640',
        videoId: video.key,
        playerVars: { autoplay: 1, controls: 0 },
        origin: 'aaa',
        host: 'https://www.youtube.com',
        events: {
          onReady: (event: any) => {
            console.log('/onReady', event, typeof event);
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            const stateCode = event.data;
            const wrapper = wrapperEl.current;

            if (stateCode === 1) {
              wrapper?.classList.add('is-enter');
            } else if (stateCode < 1) {
              wrapper?.classList.remove('is-enter');
            }
          }
        }
      });

      setIsPlayerReady(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isScriptLoad, video]);

  return useMemo(() => {
    return (
      <S.PlayerWrapper ref={wrapperEl}>
        <div id="playerMountedPoint"></div>
      </S.PlayerWrapper>
    );
  }, [isPlayerReady]);
};
