import { IMovie, IVideo } from '~/features/common/types';

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

export interface ModalData {
  movie: IMovie;
  genreNames: string[];
  credits: ICredit[];
  video: IVideo;
}
