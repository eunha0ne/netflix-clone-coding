import React from 'react';
import { IMovie, IBillBoardProps } from './types';

import { Carousel } from '~/components/Carousel';
import * as S from './BillBoardContents.style';

export const BillBoardContents = (props: IBillBoardProps) => {
  return (
    <S.Section>
      <h2>추천 콘텐츠</h2>
      <Carousel {...props} />
    </S.Section>
  );
};
