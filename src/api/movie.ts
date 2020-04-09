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

export async function getGenres(mediaType: string = 'movie') {
  const URL = `${BASE_URL}/genre/${mediaType}/list`;
  const params = {
    api_key: `${API_KEY}`,
    language: `ko`
  };

  const { data } = await axios.get(URL, { params });
  return data.genres;
}

interface getCredits {
  mediaType: string;
  id: number;
}

export async function getCredits({ mediaType, id }: getCredits) {
  const URL = `${BASE_URL}/${mediaType}/${id}/credits`;
  const params = {
    api_key: `${API_KEY}`,
    language: `ko`
  };

  const { data } = await axios.get(URL, { params });
  return data.cast;
}

// VIDEO
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=[MY_KEY]
// https://www.youtube.com/watch?v=[KEY]
