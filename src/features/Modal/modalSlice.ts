import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as L from '~/utils/fx';

import { AppThunk, AppDispatch } from '~/app/store';
import { getGenres, getCredits } from '~/api/movie';

import { IMovie } from '~/features/common/types';
import { ModalData, ICredit } from './types';

interface ModalState {
  isOpen: boolean;
  data: IMovie | null;
  genres: string[];
  credits: ICredit[] | [];
  isLoading: boolean;
  isError: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  genres: [],
  credits: [],
  data: null,
  isLoading: false,
  isError: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    getModalStart(state) {
      if (!state.isLoading) {
        state.isLoading = true;
      }
    },
    getModalSuccess(state, { payload }: PayloadAction<ModalData>) {
      const { movie, genreNames, credits } = payload;
      console.log(payload);

      if (state.isLoading) {
        state.data = movie;
        state.genres = genreNames;
        state.credits = credits;

        state.isOpen = true;
        state.isLoading = false;
      }
    },
    getModalFailure(state) {
      state.isError = true;
    },
    closeModal(state) {
      state.isOpen = false;
    }
  }
});

interface getModalDetailsProps {
  movie: IMovie;
}

export const fetchModal = ({ movie }: getModalDetailsProps): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch(getModalStart());

    const { media_type: mediaType, genre_ids: genres, id } = movie;
    const allGenres = await getGenres(mediaType);
    const genreNames: string[] = genres.map(genreId => {
      return allGenres.find(
        (gen: { id: number; name: string }) => gen.id === genreId
      ).name;
    });

    const allCredits = await getCredits({ mediaType, id });
    const credits = L.take(5, allCredits);

    dispatch(getModalSuccess({ genreNames, credits, movie }));
  } catch (error) {
    dispatch(getModalSuccess);
    console.log(error);
  }
};

const { actions, reducer } = modalSlice;
export const { getModalStart, getModalSuccess, closeModal } = actions;
export default reducer;
