import { IMovie } from '~/features/common/types';

export interface IKeyVisual {
  menuName: string;
  genre: string;
  id: number;
  resourcePath: string;
}

export interface KeyVisualPayload {
  menuName: string;
  keyVisual: IMovie;
}
