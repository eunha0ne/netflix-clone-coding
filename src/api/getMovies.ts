import { BASE_URL, API_KEY } from '~/constants';
import { Movie } from '~/features/movies/types';
import axios from 'axios';

interface GetMoiveResponse {
  result: Movie[];
  ok: boolean;
}

export default async function getMovies(): Promise<any> {
  console.log('/in');
  const requestURL = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=ko`;
  const response = await axios.get<GetMoiveResponse>(requestURL);
  // const response = await axios.get(requestURL);

  console.log('getMovies', response);

  return response.data.result;
}
