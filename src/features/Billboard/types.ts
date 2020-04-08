import { IMovie } from '~/features/common/types';

export interface IBillboard {
  menuName: string;
  genre: string;
  resourcePath: string;
  page?: number;
}

export interface BillboardPayload {
  menuName: string;
  movies: IMovie[];
}
