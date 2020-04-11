import React, { useState, useEffect } from 'react';

import * as S from './index.style';

export const Loading = () => {
  const [itemNum, setItemNum] = useState(0);
  const items = Array.from({ length: itemNum });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (itemNum < 5) {
      timeout = setTimeout(() => setItemNum(itemNum + 1), 100);
    }

    return () => clearTimeout(timeout!);
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
