import React from 'react';
// import { MovieList } from '~/features/movie/MovieList';
// import { KeyVisual } from '~/features/keyVisual';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const history = useHistory();

  const { search } = history.location;
  const query = search.split('=')[1];

  return (
    <main>
      <p>검색어: {query}</p>
    </main>
  );
};

export { Search as default };
