import axios from 'axios';

import { IMovie, IResource } from '~/app/types';
import { ISearch } from '~/features/Search/types';
import { BASE_URL, API_KEY } from '~/constants';

interface MoiveParams {
  api_key: string;
  language: string;
  query?: string;
  with_networks?: number;
  sort_by?: number;
  page?: number;
}

let params: MoiveParams = {
  api_key: API_KEY,
  language: 'ko'
};

export async function getMovie(
  resourcePath: string,
  uid: number
): Promise<IMovie> {
  const URL = `${BASE_URL}/${resourcePath}/${uid}`;
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
  const { data } = await axios.get(URL, {
    params: {
      ...params,
      with_networks: 213,
      sort_by: 'popularity.desc',
      page: page
    }
  });

  return data.results;
}

export async function getGenres(mediaType: string = 'movie') {
  const URL = `${BASE_URL}/genre/${mediaType}/list`;
  const { data } = await axios.get(URL, { params });

  return data.genres;
}

export async function getCredits({ mediaType, id }: IResource) {
  const URL = `${BASE_URL}/${mediaType}/${id}/credits`;
  const { data } = await axios.get(URL, { params });

  return data.cast;
}

export async function getVideo({ mediaType, id }: IResource) {
  const URL = `${BASE_URL}/${mediaType}/${id}/videos`;
  const { data } = await axios.get(URL, { params });
  const isKorData = data.results > 0;

  if (isKorData) return data.results;
  else {
    const { data } = await axios.get(URL, {
      params: { ...params, language: `En-US` }
    });

    return data.results;
  }
}

export async function getSearchKeyword({ mediaType, keyword }: ISearch) {
  const URL = `${BASE_URL}/search/${mediaType}`;
  const { data } = await axios.get(URL, {
    params: { ...params, query: keyword }
  });

  return data.results;
}
