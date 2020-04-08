import { IMovie } from '~/features/common/types';

export interface IBillboard {
  viewName: string;
  genre: string;
  query: string;
}

export interface BillboardPayload {
  viewName: string;
  movies: IMovie[];
}
