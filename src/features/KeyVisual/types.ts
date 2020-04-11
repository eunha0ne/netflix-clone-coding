import { IMovie } from '~/app/types';

export interface IKeyVisual {
  menuName: string;
  genre: string;
  uid: number;
  resourcePath: string;
}

export interface KeyVisualPayload {
  menuName: string;
  keyVisual: IMovie;
}
