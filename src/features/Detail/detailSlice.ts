import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as L from '~/utils/fx';

import { AppThunk, AppDispatch } from '~/app/store';
import { getGenres, getCredits, getVideo } from '~/api/movie';

import { IMovie, IVideo } from '~/app/types';
import { IDetails, ICredit } from './types';

interface DetailsState {
  data: IMovie | null;
  genres: string[];
  credits: ICredit[] | [];
  isLoading: boolean;
  isError: boolean;
  video: IVideo | null;
}

const initialState: DetailsState = {
  genres: [],
  credits: [],
  data: null,
  isLoading: false,
  isError: false,
  video: null
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    getDetailStart(state) {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    getDetailSuccess(state, { payload }: PayloadAction<IDetails>) {
      const { movie, genreNames, credits } = payload;

      if (state.isLoading) {
        state.data = movie;
        state.genres = genreNames;
        state.credits = credits;
        state.isLoading = false;
      }
    },
    getDetailVideo(state, action) {
      const { video } = action.payload;
      state.video = video;
    },
    getDetailFailure(state) {
      state.isError = true;
    },
    clearDetail(state) {
      state.data = null;
      state.video = null;
    }
  }
});

interface DetailProps {
  movie: IMovie;
}

export const fetchDetail = ({ movie }: DetailProps): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch(getDetailStart());

    const { media_type: mediaType, genre_ids: genres, id } = movie;
    const allGenres = await getGenres(mediaType);
    const genreNames: string[] = genres.map(genreId => {
      return allGenres.find(
        (gen: { id: number; name: string }) => gen.id === genreId
      ).name;
    });

    const allCredits = await getCredits({ mediaType, id });
    const credits = L.take(5, allCredits);

    dispatch(getDetailSuccess({ genreNames, credits, movie }));
  } catch (error) {
    dispatch(getDetailSuccess);
    console.log(error);
  }
};

export const fetchVideo = ({
  mediaType,
  id
}: {
  mediaType: string;
  id: number;
}): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(clearDetail());

  const allVideos = await getVideo({ mediaType, id });
  const latestVideo = allVideos[allVideos.length - 1];

  dispatch(getDetailVideo({ video: latestVideo }));
};

const { actions, reducer } = detailSlice;
export const {
  getDetailStart,
  getDetailSuccess,
  getDetailFailure,
  getDetailVideo,
  clearDetail
} = actions;
export default reducer;
