import React from 'react';
import { IMovie } from '~/app/types';

import { VideoPlayer } from '~/features/VideoPlayer';

import * as UI from '~/assets/ui/Icons';
import * as S from './KeyVisualContents.style';

interface IMovieContent {
  movie: IMovie;
  menuName: string;
  mediaType: string;
  isPopupOpen: boolean;
}

export const KeyVisualContents = ({
  movie: { title, name, tagline, overview, backdrop_path: backPath, id },
  menuName,
  mediaType,
  isPopupOpen
}: IMovieContent) => {
  const backDir = ['home', 'tv'].includes(menuName) ? 'default' : 'reverse';

  return (
    <>
      <h2 className="blind">특별 컨텐츠</h2>
      <S.Background backPath={backPath} backDir={backDir}>
        <S.Contents>
          <h3 className="title">{title || name}</h3>
          <p className="subTitle">{tagline}</p>
          {/* <Genres genres={genres} /> */}
          <p className="overview">{overview}</p>
          <BtnGroups />
        </S.Contents>

        {!isPopupOpen && <VideoPlayer mediaType={mediaType} id={id} />}
      </S.Background>
    </>
  );
};

interface IGeners {
  genres: [{ id: number; name: string }];
}

// const Genres = ({ genres }: IGeners) => {
//   return genres ? (
//     <S.ListGroup>
//       {genres.map((genre, idx) => (
//         <li key={`key-genre-${idx}`}>{genre.name}</li>
//       ))}
//     </S.ListGroup>
//   ) : null;
// };

const BtnGroups = () => (
  <S.ButtonGroup>
    <button className="play">
      <UI.Play width="2vw" height="100%" />
      <span>재생</span>
    </button>

    <button className="details">
      <UI.InfoCircle width="1.75vw" height="100%" />
      <span>상세 정보</span>
    </button>
  </S.ButtonGroup>
);
