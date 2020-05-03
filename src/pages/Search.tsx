import React from 'react';
import { useHistory } from 'react-router-dom';

import { SearchBoard } from '~/features/Search';

import * as S from '~/assets/styles/Main';

const Search = () => {
  const history = useHistory();

  const { search } = history.location;
  const query = search.split('=')[1];

  return (
    <S.Main>
      <SearchBoard keyword={query} />
    </S.Main>
  );
};

export { Search as default };
