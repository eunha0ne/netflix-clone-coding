import { IMovie } from '~/features/common/types';

export interface IPosterCard {
  viewName: string;
  genre: string;
  resourcePath: string;
}

export interface PosterCardPayload {
  viewName: string;
  movies: IMovie[];
}
