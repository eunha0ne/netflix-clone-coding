/**
 * API 호출 시에 사용할 `기본 경로`와 `고유 키` 값을 정의합니다.
 */

export const API_KEY = '421771ed17b0da55803b567502a60f56';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_URL = 'https://image.tmdb.org/t/p';

/**
 * 앱 전역에서 공통적으로 사용할 빌보드 컴포넌트의 기본 상태 값을 정의합니다.
 */

export const CARDS_LEN_PER_SLIDE = 5;
export const BILLBOARD_ITEMS_LEN = 20;
export const BILLBOARD_MAX_LEN = 7;

/**
 * 페이지를 생성할 때 사용할 기본 상수를 정의합니다.
 */

export const DEFAULT_MENU_NAME = 'home';
export const DEFAULT_MOVIE_ID = '181808';

/**
 * Image Sizes
 */

// poster   = Poster ............  500 x 750   2000 x 3000
// backdrop = Fanart ............ 1280 x 720   3840 x 2160
// still    = TV Show Episode ... 1280 x 720   3840 x 2160
// profile  = Actors Actresses ..  300 x 450   2000 x 3000
// logo     = TMDb Logo

// |  poster  | backdrop |  still   | profile  |   logo   |
// | :------: | :------: | :------: | :------: | :------: |
// | -------- | -------- | -------- |    w45   |    w45   |
// |    w92   | -------- |    w92   | -------- |    w92   |
// |   w154   | -------- | -------- | -------- |   w154   |
// |   w185   | -------- |   w185   |   w185   |   w185   |
// | -------- |   w300   |   w300   | -------- |   w300   |
// |   w342   | -------- | -------- | -------- | -------- |
// |   w500   | -------- | -------- | -------- |   w500   |
// | -------- | -------- | -------- |   h632   | -------- |
// |   w780   |   w780   | -------- | -------- | -------- |
// | -------- |  w1280   | -------- | -------- | -------- |
// | original | original | original | original | original |
