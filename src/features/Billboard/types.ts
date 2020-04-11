import { IMovie } from '~/app/types';

export interface IBillboard {
  menuName: string;
  genre: string;
  resourcePath: string;
  sectionTitle: string;
  page?: number;
}

export interface BillboardPayload {
  menuName: string;
  movies: IMovie[];
  page: number;
}
