import axios from 'axios';

import { IMovie, IResource } from '~/app/types';
import { BASE_URL, API_KEY } from '~/constants';

export async function getMovie(
  resourcePath: string,
  uid: number
): Promise<IMovie> {
  const URL = `${BASE_URL}/${resourcePath}/${uid}`;
  const params = {
    api_key: API_KEY,
    language: 'ko'
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
    api_key: API_KEY,
    with_networks: 213,
    sort_by: 'popularity.desc',
    language: 'ko',
    page: page
  };

  const { data } = await axios.get(URL, { params });
  return data.results;
}

export async function getGenres(mediaType: string = 'movie') {
  const URL = `${BASE_URL}/genre/${mediaType}/list`;
  const params = {
    api_key: API_KEY,
    language: 'ko'
  };

  const { data } = await axios.get(URL, { params });
  return data.genres;
}

export async function getCredits({ mediaType, id }: IResource) {
  const URL = `${BASE_URL}/${mediaType}/${id}/credits`;
  const params = {
    api_key: API_KEY,
    language: 'ko'
  };

  const { data } = await axios.get(URL, { params });
  return data.cast;
}

export async function getVideo({ mediaType, id }: IResource) {
  const URL = `${BASE_URL}/${mediaType}/${id}/videos`;
  let params = {
    api_key: API_KEY,
    language: 'ko'
  };

  const { data } = await axios.get(URL, { params });
  const isData = data.results > 0;

  if (isData) return data.results;
  else {
    params = { ...params, language: `En-US` };
    const { data } = await axios.get(URL, { params });

    return data.results;
  }
}

interface ISearch extends IResource {
  keywords: string;
}

export async function getSearchMovie({ mediaType, id, keywords }: ISearch) {
  const URL = `${BASE_URL}/search/${mediaType}`;
  let params = {
    api_key: API_KEY,
    language: 'ko',
    query: keywords
  };

  const { data } = await axios.get(URL, { params });

  console.log(data);
}
