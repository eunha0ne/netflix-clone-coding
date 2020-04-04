import { BASE_URL, API_KEY } from '~/constants';
import { IMovie as KeyVisualResponse } from '~/features/keyVisual/types';
import { IMovie } from '~/features/movie/types';
import axios from 'axios';

export type GetMoiveResponse = {
  results: IMovie[];
};

export async function getPopularMovies(): Promise<GetMoiveResponse> {
  const requestURL = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=ko`;
  const response = await axios.get(requestURL);
  // const response = await axios.get(requestURL);

  return response.data.results;
}

/**
 * KeyVisual 가져오기
 *
 * https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
 */

export async function getKeyVisual({
  genre
}: {
  genre: string;
}): Promise<KeyVisualResponse> {
  const url = `${BASE_URL}/${genre}/4935?api_key=${API_KEY}&language=ko`;
  const { data } = await axios.get(url);

  return data;
}
