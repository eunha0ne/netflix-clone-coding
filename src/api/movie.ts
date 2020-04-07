import { BASE_URL, API_KEY } from '~/constants';
import axios from 'axios';

import { IMovie } from '~/features/keyVisual/types';

export async function getMovie(query: string, id: number): Promise<IMovie> {
  const url = `${BASE_URL}/${query}/${id}?api_key=${API_KEY}&language=ko`;
  const { data } = await axios.get(url);

  return data;
}

export async function getMovies(query: string): Promise<IMovie[]> {
  const url = `${BASE_URL}${query}?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=ko`;
  const { data } = await axios.get(url);

  return data.results;
}
