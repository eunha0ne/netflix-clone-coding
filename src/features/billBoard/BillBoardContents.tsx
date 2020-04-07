import React from 'react';
import { IBillBoardProps } from './types';
import { Carousel } from '~/components/Carousel';

export const BillBoardContents = (props: IBillBoardProps) => {
  return (
    <section>
      <h2>추천 콘텐츠</h2>
      <Carousel {...props} />
    </section>
  );
};
