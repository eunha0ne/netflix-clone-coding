import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as L from '~/utils/fx';

import { AppThunk, AppDispatch } from '~/app/store';
import { getVideos } from '~/api/movie';

import { ContentsReadyState, IVideo } from '~/app/types';
import { IFetchedVideo } from './types';

interface VideoState extends ContentsReadyState {
  video: IVideo | null;
}

const initialState: VideoState = {
  isLoading: false,
  isError: false,
  video: null
};

const detailSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    getVideoStart(state) {
      if (!state.isLoading) {
        state.isError = false;
        state.isLoading = true;
      }
    },
    getVideoSuccess(state, { payload }: PayloadAction<IFetchedVideo>) {
      if (state.isLoading) {
        const { video } = payload;
        state.video = video;
      }
    },
    getDetailFailure(state) {
      state.isError = true;
    },
    clearVideo(state) {
      state.video = null;
    }
  }
});

export const fetchVideo = ({
  mediaType,
  id
}: {
  mediaType: string;
  id: number;
}): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(getVideoStart());

    const allVideos = await getVideos({ mediaType, id });
    const videos = L.go(
      allVideos,
      L.filter((video: { type: string }) =>
        ['Trailer', 'Teaser'].includes(video.type)
      ),
      L.filter(
        (video: { name: string }) =>
          /Official\s[Trailer|Teaser]/.test(video.name) ||
          /[Trailer|Teaser]/i.test(video.name)
      ),
      L.take(1)
    );

    dispatch(getVideoSuccess({ video: videos[0] }));
  } catch (error) {
    dispatch(getDetailFailure());
    console.log(error);
  }
};

const { actions, reducer } = detailSlice;
export const { getVideoStart, getVideoSuccess, getDetailFailure } = actions;
export default reducer;
