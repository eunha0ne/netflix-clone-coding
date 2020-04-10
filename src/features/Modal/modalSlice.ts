import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as L from '~/utils/fx';

import { AppThunk, AppDispatch } from '~/app/store';
import { getGenres, getCredits } from '~/api/movie';

import { IMovie } from '~/features/common/types';

interface ModalState {
  isOpen: boolean;
  data: IMovie | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  isLoading: false,
  isError: false,
  data: null
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
    getModalSuccess(state, { payload }: PayloadAction<IMovie>) {
      // const {} = payload
      if (state.isLoading) {
        state.data = payload;
        state.isOpen = true;
        state.isLoading = false;
      }
    },
    openModal(state, { payload }: PayloadAction<IMovie>) {
      console.log('=>', payload);

      state.data = payload;
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    }
  }
});

// export const fetchBillboard = ({
//   menuName,
//   resourcePath,
//   page = 1
// }: IBillboard): AppThunk => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(getBoardStart({ menuName }));
//     const movies = await getMovies({ resourcePath, page });
//     dispatch(getBoardSuccess({ menuName, movies, page }));
//   } catch (error) {
//     dispatch(getBoardFailure({ menuName }));
//     console.log(error);
//   }
// };

interface getModalDetailsProps {
  genres: number[];
  mediaType: string;
  id: number;
}

export const getModalDetails = ({
  genres,
  mediaType,
  id
}: getModalDetailsProps): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const allGenres = await getGenres(mediaType);
    const genreNames = genres.map(genreId => {
      return allGenres.find(
        (gen: { id: number; name: string }) => gen.id === genreId
      ).name;
    });

    const allCredits = await getCredits({ mediaType, id });
    const credits = L.take(10, allCredits);
    // dispatch();
  } catch (error) {
    console.log(error);
  }
};

const { actions, reducer } = modalSlice;
export const { openModal, closeModal } = actions;
export default reducer;
