import { IMovie } from '~/features/common/types';

export interface IKeyVisual {
  viewName: string;
  genre: string;
  id: number;
  query: string;
}

export interface KeyVisualPayload {
  viewName: string;
  keyVisual: IMovie;
}