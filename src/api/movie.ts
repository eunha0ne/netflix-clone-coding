import { BASE_URL, API_KEY, TV_IMG_URL, BACK_IMG_URL } from '~/constants';
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

export async function getImage(movieId: number, imgType: string): Promise<any> {
  // https://api.themoviedb.org/3/tv/{tv_id}/images?api_key=<<api_key>>&language=en-US
  // 'https://image.tmdb.org/t/p/original';

  const requestURL = `${TV_IMG_URL}/${movieId}/images?api_key=${API_KEY}&language=ko`;
  const response = await axios.get(requestURL);

  return response.data.results;
}
