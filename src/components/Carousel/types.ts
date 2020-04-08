import { IMovie } from '~/features/common/types';

export interface ICarousel {
  movies: IMovie[];
  genre: string;
}
