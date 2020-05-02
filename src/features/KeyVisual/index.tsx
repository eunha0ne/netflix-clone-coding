import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/app/rootReducer';
import { fetchKeyVisual } from './keyVisualSlice';
import { IMovie } from '~/app/types';
import { IKeyVisual } from './types';

import { Loading } from '~/components/Loading';
import { KeyVisualContents } from './KeyVisualContents';

import * as S from './KeyVisualContents.style';

export const KeyVisual = (pageDefs: IKeyVisual) => {
  const dispatch = useDispatch();

  const { menuName } = pageDefs;
  const { isLoading, isError, movie } = useSelector((state: RootState): {
    isLoading: boolean;
    isError: boolean;
    movie: IMovie | null;
  } => ({
    isLoading: state.keyVisual.isLoading,
    isError: state.keyVisual.isError,
    movie: state.keyVisual.views[menuName]
  }));

  useEffect(() => {
    if (!movie) {
      dispatch(fetchKeyVisual(pageDefs));
    }
  }, [dispatch, movie, pageDefs]);

  const isContentReady = !isLoading && !isError;
  return useMemo(() => {
    return (
      <S.Section>
        {isContentReady && movie !== null ? (
          <KeyVisualContents
            movie={movie}
            menuName={menuName}
            mediaType={pageDefs.genre}
          />
        ) : (
          <Loading />
        )}
      </S.Section>
    );
  }, [isContentReady, movie, menuName]);
};
