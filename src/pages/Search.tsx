import React from 'react';
import { useHistory } from 'react-router-dom';

import { SearchBoard } from '~/features/Search';

const Search = () => {
  const history = useHistory();

  const { search } = history.location;
  const query = search.split('=')[1];

  return (
    <main>
      <p>검색어: {query}</p>
      <SearchBoard mediaType={'movie'} keyword={query} />
    </main>
  );
};

export { Search as default };
