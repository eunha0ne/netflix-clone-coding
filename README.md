# netflix-clone-coding

![넷플릭스 클론 코딩](./src/assets/images/netflix_clone_1.gif)

## 소개

사용자들이 넷플릭스에 대해 공통적으로 생각하고 있는 공유된 멘탈 모델을 바탕으로 유스케이스와 사용자 모델을 역기획하여 실제 서비스와 유사하게 동작할 수 있도록 개발을 시도했습니다.

## Getting Started

```bash
# 설치하기
npm install

# 앱 실행하기
npm run start
```

## 폴더 구조

```
/src
├─ index.tsx
├─ api
├─ app
│  ├─ App.js
│  ├─ rootReducer.ts
│  ├─ store.ts
│  └─ types.ts
├─ assets --------------- 이미지, 스타일, 아이콘 컴포넌트
│  ├─ images
│  ├─ styles
│  └─ ul
├─ components ----------- 프리젠테이셔널 컴포넌트
│  ├─ Carousel
│  ├─ ContentsBoard
│  ├─ Footer
│  ├─ Header
│  ├─ Loading
│  ├─ Menu
│  ├─ Modal
│  ├─ Navigation
│  ├─ SearchBar
│  └─ VideoPlayer
├─ constants ----------- 앱 전역에서 사용할 상수 정의
├─ feature ------------- 리덕스 로직을 담당하는 컴포넌트
│  ├─ Billboard
│  ├─ Detail
│  ├─ KeyVisual
│  ├─ Modal
│  ├─ PosterCard
│  └─ Search
├─ hooks -------------- 커스텀 훅
├─ layout ------------- 애플리케이션 레이아웃
├─ pages
└─ utils -------------- 유틸리티 함수
```

> 아직 개발 중인 내용이 있어서 미구현된 기능과 개선해야될 코드들이 있습니다.
