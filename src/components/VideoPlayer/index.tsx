import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { IResource } from '~/app/types';
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
  const [player, setPlayer] = useState(null);
  // const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isScriptLoad, setIsScriptLoad] = useState(false);
  const { video } = useSelector((state: RootState) => ({
    video: state.detail.video
  }));

  useEffect(() => {
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
      const player = new window.YT.Player('playerMountedPoint', {
        height: '360',
        width: '640',
        videoId: video.key,
        playerVars: { autoplay: 1, controls: 0 },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            const wrapper = wrapperEl.current;
            const wrapperClasses = wrapper?.classList;
            const stateCode = event.data;
            const isLoaded = stateCode < 1;

            if (isLoaded) {
              wrapperClasses?.remove('is-enter');
            } else {
              wrapperClasses?.add('is-enter');
            }
          }
        }
      });

      setPlayer(player);
      // setIsPlayerReady(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isScriptLoad, video, player]);

  return useMemo(() => {
    return (
      <S.PlayerWrapper ref={wrapperEl}>
        <div id="playerMountedPoint"></div>
      </S.PlayerWrapper>
    );
  }, []);
};
