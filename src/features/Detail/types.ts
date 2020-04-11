import { IMovie, IVideo } from '~/app/types';

export interface ICredit {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}

export interface IDetails {
  movie: IMovie;
  genreNames: string[];
  credits: ICredit[];
}
