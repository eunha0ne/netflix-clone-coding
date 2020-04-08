import { IMovie } from '~/features/common/types';

export interface IPosterCard {
  menuName: string;
  genre: string;
  resourcePath: string;
}

export interface PosterCardPayload {
  menuName: string;
  movies: IMovie[];
}
