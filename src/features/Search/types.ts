import { IMovie } from '~/app/types';

export interface ISearch {
  mediaType?: string;
  keyword: string;
}

export interface searchPayload {
  movies: IMovie[];
}
