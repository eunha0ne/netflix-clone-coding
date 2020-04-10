export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  name: string;
  original_name: string;
  tagline: string;
  overview: string;
  genres: [{ id: number; name: string }];
  genre_ids: [number];
  backdrop_path: string | null;
  poster_path: string | null;
  vote_average: number;
  production_countries: [{ name: string }];
  runtime: number;
  release_date: string;
  media_type: string;
}

export interface IVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

export interface IFeature {
  isLoading: boolean;
  isError: boolean;
}
