import axios from 'axios';

import { IMovie } from '~/features/common/types';
import { BASE_URL, API_KEY } from '~/constants';

export async function getMovie(
  resourcePath: string,
  uid: number
): Promise<IMovie> {
  const URL = `${BASE_URL}/${resourcePath}/${uid}`;
  const params = {
    api_key: `${API_KEY}`,
    language: `ko`
  };

  const { data } = await axios.get(URL, { params });

  return data;
}

interface GetMoviesProps {
  resourcePath: string;
  page?: number;
}

export async function getMovies({
  resourcePath,
  page = 1
}: GetMoviesProps): Promise<IMovie[]> {
  const URL = `${BASE_URL}${resourcePath}`;
  const params = {
    api_key: `${API_KEY}`,
    with_networks: 213,
    sort_by: `popularity.desc`,
    language: `ko`,
    page: `${page}`
  };

  const { data } = await axios.get(URL, { params });

  return data.results;
}
