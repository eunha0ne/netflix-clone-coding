import { IMovie } from '~/app/types';

export interface IKeyVisual {
  menuName: string;
  genre: string;
  resourcePath: string;
  movieID: number;
}

export interface KeyVisualPayload {
  menuName: string;
  keyVisual: IMovie;
}
