import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { IVideo, IResource } from '~/app/types';
import { fetchVideo } from '~/features/Detail/detailSlice';

export const VideoPlayer = ({ mediaType, id }: IResource) => {
  const dispatch = useDispatch();
  const { video } = useSelector((state: RootState) => ({
    video: state.detail.video
  }));

  useEffect(() => {
    dispatch(fetchVideo({ mediaType, id }));
  }, []);

  return useMemo(() => {
    console.log('video', video);

    return video !== null ? (
      <iframe
        title={video.name}
        frameBorder="0"
        allow="accelerometer"
        src={`https://www.youtube.com/embed/${video.key}?controls=0&autoplay=1&mute=1`}
      ></iframe>
    ) : null;
  }, [video]);
};
