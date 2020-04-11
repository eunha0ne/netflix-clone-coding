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
    getDetailFailure(state) {
      state.isError = true;
    }
  }
});

interface getModalDetailsProps {
  movie: IMovie;
}

export const fetchDetail = ({
  movie
}: getModalDetailsProps): AppThunk => async (dispatch: AppDispatch) => {
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

    // const allVideos = await getVideo({ mediaType, id });
    // const video = allVideos[allVideos.length - 1];

    dispatch(getDetailSuccess({ genreNames, credits, movie }));
  } catch (error) {
    dispatch(getDetailSuccess);
    console.log(error);
  }
};

export const fetchVideo = () => {};

const { actions, reducer } = detailSlice;
export const { getDetailStart, getDetailSuccess, getDetailFailure } = actions;
export default reducer;
