import React, { useEffect } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL } from '~/constants';

const Home = () => {
  useEffect(() => {
    fetchApi();
  }, []);

  const nexflixShows = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=ko`;
  const fetchApi = async () => {
    const response = await axios.get(nexflixShows);
    console.log(response.data);
  };

  return (
    <>
      <header>
        <h2>Home contents</h2>
      </header>
    </>
  );
};

export { Home as default };
