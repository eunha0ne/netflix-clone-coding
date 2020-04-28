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
      createPlayer({ video, wrapperEl });
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
  }, []);
};

interface CreatePlayerProps {
  video: IVideo;
  wrapperEl: React.RefObject<HTMLDivElement>;
}

const createPlayer = ({ video, wrapperEl }: CreatePlayerProps) => {
  return new window.YT.Player('playerMountedPoint', {
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
        const isPlay = stateCode >= 1;

        if (isPlay) {
          wrapperClasses?.add('is-enter');
        } else {
          wrapperClasses?.remove('is-enter');
        }
      }
    }
  });
};
