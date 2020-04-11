import React from 'react';

import { IVideo } from '~/app/types';

export const VideoPlayer = ({ video }: { video?: IVideo | null }) => {
  console.log(video);

  return video ? (
    <iframe
      title={video.name}
      frameBorder="0"
      allow="accelerometer"
      src={`https://www.youtube.com/embed/${video.key}?controls=0&autoplay=1&mute=1`}
    ></iframe>
  ) : null;
};
