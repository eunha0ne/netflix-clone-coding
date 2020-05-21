import React from 'react';

import { IMovie, IVideo } from '~/app/types';
import { ICredit } from './types';

import { VideoPlayer } from '~/features/VideoPlayer';
import { ContentsMeta } from './ContentsMeta';

import { shorten } from '~/utils/common';

import * as UI from '~/assets/ui/Icons';
import * as S from './Contents.style';

interface ContentsProps {
  movie: IMovie;
  genres: string[];
  credits: ICredit[];
  video?: IVideo | null;
}

export const Contents = ({
  movie: {
    title,
    name,
    original_title: originalTitle,
    original_name: originalName,
    release_date,
    overview: text,
    media_type: mediaType,
    id
  },
  genres,
  credits
}: ContentsProps) => {
  const releaseDate = release_date && release_date.split('-')[0];
  const synopsis = text.length > 300 ? shorten(text, 300) : text;

  return (
    <>
      <S.Article>
        <Header
          title={title || name}
          originalTitle={originalTitle || originalName}
          releaseDate={releaseDate}
        />

        <div className="contents">
          <p>{synopsis}</p>
        </div>

        <BtnGroups />
        <ContentsMeta genres={genres} credits={credits} />
      </S.Article>

      <VideoPlayer mediaType={mediaType} id={id} />
    </>
  );
};

const Header = ({
  title,
  originalTitle,
  releaseDate
}: {
  [key: string]: string;
}) => {
  return (
    <header>
      <strong className="title">{title}</strong>
      <p>
        {originalTitle}
        {releaseDate && <span className="release-date">, {releaseDate}</span>}
      </p>
    </header>
  );
};

const BtnGroups = () => (
  <S.BtnGroups>
    <button>
      <UI.Play width="2vw" height="2vw" />
      <span>재생</span>
    </button>
    <button>
      <UI.Plus width="2vw" height="2vw" />
      <span>내가 찜한 콘텐츠</span>
    </button>
  </S.BtnGroups>
);
