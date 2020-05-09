import { IMovie } from '~/app/types';

export interface IPosterCard {
  menuName: string;
  genre: string;
  resourcePath: string;
  sectionTitle: string;
}

export interface PosterCardPayload {
  menuName: string;
  movies: IMovie[];
}
