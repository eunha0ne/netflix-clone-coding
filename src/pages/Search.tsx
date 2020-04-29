import React from 'react';
import { useHistory } from 'react-router-dom';

import { SearchBoard } from '~/features/Search';

import * as S from '~/assets/styles/main';

const Search = () => {
  const history = useHistory();

  const { search } = history.location;
  const query = search.split('=')[1];

  return (
    <S.Main>
      <p>검색어: {query}</p>
      <h2>영화/TV 프로그램 검색</h2>
      <SearchBoard keyword={query} />
    </S.Main>
  );
};

export { Search as default };
