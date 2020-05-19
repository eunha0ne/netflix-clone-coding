import { useState, useEffect, RefObject } from 'react';
import { IVideo } from '~/app/types';

declare global {
  interface Window {
    YT: { loaded: number; Player: any };
  }
}

interface CreatePlayerProps {
  wrapperEl: RefObject<HTMLDivElement>;
  video: IVideo | null;
}

export const useCreatePlayer = ({ wrapperEl, video }: CreatePlayerProps) => {
  const [isScriptLoad, setIsScriptLoad] = useState(false);

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
          const isYoutubeReady = window.YT.loaded === 1;
          if (isYoutubeReady) {
            setIsScriptLoad(true);
            clearInterval(interval);
          }
        }, 30);
      };

      head?.insertBefore(tag, scriptTag);
    } else {
      createPlayer({ video, wrapperEl });
    }

    return () => clearInterval(interval);
  }, [isScriptLoad, video]);
};

interface CreatePlayerProps {
  video: IVideo | null;
  wrapperEl: React.RefObject<HTMLDivElement>;
}

interface PlayerYT {
  target: any; // 실제로는 유투브 플레이어 객체로 인터페이스 구현되어 있음
  data: number;
}

const createPlayer = ({ video, wrapperEl }: CreatePlayerProps) => {
  if (video === null) {
    return;
  }

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
        setFadeInOut(player, wrapperEl);
      }
    }
  });
};

function setFadeInOut(
  player: PlayerYT,
  wrapperEl: React.RefObject<HTMLDivElement>
) {
  const wrapper = wrapperEl.current;

  if (wrapper !== null && wrapper !== undefined) {
    const wrapperClasses = wrapper.classList;
    const isPlayState = player.data >= 1;

    isPlayState
      ? wrapperClasses.add('is-enter')
      : wrapperClasses.remove('is-enter');
  }
}
