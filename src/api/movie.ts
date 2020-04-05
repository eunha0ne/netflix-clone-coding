import { BASE_URL, API_KEY } from '~/constants';
import { IMovie as KeyVisualResponse } from '~/features/keyVisual/types';
import { IMovie as PopularsResponse } from '~/features/movie/types';
import axios from 'axios';

export async function getPopularMovies(): Promise<PopularsResponse[]> {
  const url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=ko`;
  const { data } = await axios.get(url);

  return data.results;
}

export async function getKeyVisual({
  genre
}: {
  genre: string;
}): Promise<KeyVisualResponse> {
  const url = `${BASE_URL}/${genre}/4935?api_key=${API_KEY}&language=ko`;
  const { data } = await axios.get(url);

  return data;
}
