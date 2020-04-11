import React from 'react';

import { IVideo, IResource } from '~/app/types';

export const VideoPlayer = ({ mediaType, id }: IResource) => {
  const video = { name: '', key: '' };

  return video ? (
    <iframe
      title={video.name}
      frameBorder="0"
      allow="accelerometer"
      src={`https://www.youtube.com/embed/${video.key}?controls=0&autoplay=1&mute=1`}
    ></iframe>
  ) : null;
};
