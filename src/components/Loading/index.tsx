import React, { useState, useEffect } from 'react';

import * as S from './index.style';

export const Loading = () => {
  const [itemNum, setItemNum] = useState(0);
  const items = Array.from({ length: itemNum });

  useEffect(() => {
    if (itemNum < 5) {
      setTimeout(() => setItemNum(itemNum + 1), 100);
    }
  }, [itemNum]);

  return (
    <S.Loading>
      <ul>
        {items.map((i, idx) => {
          return <S.Item className="item" key={idx}></S.Item>;
        })}
      </ul>
    </S.Loading>
  );
};
