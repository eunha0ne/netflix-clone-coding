import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchKeyVisual } from './keyVisualSlice';
import { IMovie } from '~/app/types';
import { IKeyVisual } from './types';

import { Loading } from '~/components/Loading';
import { KeyVisualContents } from './KeyVisualContents';

import * as S from './index.style';

interface IState {
  movie: IMovie | null;
  isContentsReady: boolean;
  isPopupOpen: boolean;
}

export const KeyVisual = (pageDefs: IKeyVisual) => {
  const dispatch = useDispatch();

  const { menuName, genre } = pageDefs;
  const { isContentsReady, movie, isPopupOpen } = useSelector(
    (state: RootState): IState => ({
      movie: state.keyVisual.views[menuName],
      isContentsReady: !state.keyVisual.isLoading && !state.keyVisual.isError,
      isPopupOpen: state.modal.isOpen
    })
  );

  useEffect(() => {
    if (!movie) {
      dispatch(fetchKeyVisual(pageDefs));
    }
  }, [dispatch, movie, pageDefs]);

  return useMemo(() => {
    return (
      <S.Section>
        {isContentsReady && movie !== null ? (
          <KeyVisualContents
            movie={movie}
            menuName={menuName}
            mediaType={genre}
            isPopupOpen={isPopupOpen}
          />
        ) : (
          <Loading />
        )}
      </S.Section>
    );
  }, [isContentsReady, movie, menuName, genre, isPopupOpen]);
};
