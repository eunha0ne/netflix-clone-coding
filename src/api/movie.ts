import { BASE_URL, API_KEY } from '~/constants';
import axios from 'axios';

import { IMovie } from '~/features/common/types';

export async function getMovie(
  resourcePath: string,
  id: number
): Promise<IMovie> {
  const url = `${BASE_URL}/${resourcePath}/${id}?api_key=${API_KEY}&language=ko`;
  const { data } = await axios.get(url);

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
  const queryString = `&with_networks=213&sort_by=popularity.desc`;
  const url = `${BASE_URL}${resourcePath}?api_key=${API_KEY}${queryString}&language=ko&page=${page}`;
  const { data } = await axios.get(url);

  return data.results;
}
