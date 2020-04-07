import React, { useState } from 'react';
import { SLIDE_PER_CARDS_LEN as CARDS_LEN } from '~/constants';
import { IBillBoardProps } from '~/features/billBoard/types';

import { ListGroup } from './ListGroup';
import * as UI from '~/assets/ui/Icons';
import * as S from './index.style';

export const Carousel = (props: IBillBoardProps) => {
  const { movies } = props;
  const [pageIndex, setPageIndex] = useState(0);

  const isNotStart = pageIndex > 0;
  const isNotEnd = pageIndex + 1 < movies.length / CARDS_LEN;
  const goPrev = () => isNotStart && setPageIndex(pageIndex - 1);
  const goNext = () => isNotEnd && setPageIndex(pageIndex + 1);

  return (
    <S.Wrapper>
      {isNotStart && (
        <S.Button arrowDir="PREV" onClick={goPrev}>
          <UI.ArrowLeft width="3.5vw" height="5vw" />
          <span className="blind">이전 슬라이드</span>
        </S.Button>
      )}

      <ListGroup {...props} pageIndex={pageIndex} />

      {isNotEnd && (
        <S.Button arrowDir="NEXT" onClick={goNext}>
          <UI.ArrowRight width="3.5vw" height="5vw" />
          <span className="blind">다음 슬라이드</span>
        </S.Button>
      )}
    </S.Wrapper>
  );
};
