import { IMovie } from '~/features/common/types';

export interface IBillboard {
  viewName: string;
  genre: string;
  resourcePath: string;
}

export interface BillboardPayload {
  viewName: string;
  movies: IMovie[];
}
