import React, { useEffect } from 'react';

import { fetchKeyVisual, IKeyVisual } from './keyVisualSlice';
import { IMovie } from './types';

export const KeyVisualWrapper = ({}: IKeyVisual) => {
  return <div></div>;
};

// const KeyVisualContents = ({ loading, movie }: IKeyVisual) => {
//   const renderContents = () => {
//     const isMakeup = loading === 'idle' || loading === 'pending';
//     const isError = loading === 'error';
//     let contents = null;

//     if (isMakeup) {
//       contents = <p>컨텐츠를 가져오는 중입니다.</p>;
//     } else if (isError) {
//       contents = <p>컨텐츠를 가져오지 못 했습니다.</p>;
//     } else {
//       contents = <div>...</div>;
//     }

//     return contents;
//   };

//   return renderContents();
// };
