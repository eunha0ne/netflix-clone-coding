export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  name: string;
  original_name: string;
  tagline: string;
  overview: string;
  genres: [{ id: number; name: string }];
  backdrop_path: string | null;
  poster_path: string | null;
  vote_average: number;
  production_countries: [{ name: string }];
  runtime: number;
  release_date: string;
}

export interface IBoardProps {
  viewName: string;
  genre: string;
  query: string;
}

export interface IBillBoardProps {
  movies: IMovie[];
  genre: string;
}
