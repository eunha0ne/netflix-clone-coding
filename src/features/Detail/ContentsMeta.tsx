import React from 'react';

import { ICredit } from './types';

import * as S from './ContentsMeta.style';

export const ContentsMeta = ({
  genres,
  credits
}: {
  genres: string[];
  credits: ICredit[];
}) => (
  <S.Meta>
    <div className="credits">
      <strong>주연:</strong>
      <ul>
        {credits.map((credit, idx) => {
          const toggleComma = idx !== credits.length - 1 ? ',' : '';

          return (
            <li key={`credits-${idx}`}>
              <span>
                {credit.name}
                {toggleComma}
              </span>
            </li>
          );
        })}
      </ul>
    </div>

    <div className="genres">
      <strong>장르:</strong>
      <ul>
        {genres.map((genre, idx) => {
          return <li key={`genres-${idx}`}>{genre}</li>;
        })}
      </ul>
    </div>
  </S.Meta>
);
