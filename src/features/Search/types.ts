import { IMovie } from '~/app/types';

export interface ISearch {
  mediaType?: string;
  keyword: string;
}

export interface ISearchPayload {
  movies: IMovie[];
}

export interface IPagePayload {
  previousPage: string;
  pageGenre: string;
}
