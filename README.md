## 개발 참고

### 리액트

- [React](https://ko.reactjs.org/docs/getting-started.html)
- [CRA](https://create-react-app.dev/)
- [코드 스플릿팅]()
- [throttle-debounce]()
- [Effect hook](https://ko.reactjs.org/docs/hooks-effect.html)

### 라우트 설정

- [react-router](https://reacttraining.com/react-router/web/guides/quick-start)

### 환경 설정 오버라이딩

- [customize-cra](https://github.com/arackaf/customize-cra)
- [react-app-rewired](https://github.com/timarney/react-app-rewired)

### API 개발

- [Axios](https://github.com/axios/axios)
- [(참고) API 연동](https://velog.io/@smooth97/Netflix-Clone-1-API-)

### 상태 관리, Redux

- [Redux: 리덕스](https://redux.js.org/introduction/getting-started)
- [Redux: 리덕스, 스타일 가이드](https://redux.js.org/style-guide/style-guide)
  - [(참고) 번역: 리덕스, 스타일 가이드](https://baeharam.netlify.com/posts/architecture/%EB%B2%88%EC%97%AD-%EB%A6%AC%EB%8D%95%EC%8A%A4-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B0%80%EC%9D%B4%EB%93%9C)
- [React Redux: 리엑트 리덕스 (Offical React bindings for Redux)](https://react-redux.js.org/)
- [Redux Thunk: 리덕스 미들웨어](https://github.com/reduxjs/redux-thunk)

  - [(참고) Redux Thunk 소개](http://react.vlpt.us/redux-middleware/04-redux-thunk.html)

- [Redux Toolkit: 리덕스 툴킷](https://redux-toolkit.js.org/)

  - [(예제) RTK 투두: rtk-convert-todos-example](https://github.com/reduxjs/rtk-convert-todos-example)
  - [(참고) 리덕스 툴킷: redux-react-guide (with Redux Toolkit)](https://www.taniarascia.com/redux-react-guide/)
  - [(참고) 리덕스 툴킷, 타입스크립트: redux-made-easy-with-redux-toolkit-and-typescrip](https://www.mattbutton.com/redux-made-easy-with-redux-toolkit-and-typescript/)

* [(참고) useSelector 최적화: optimize-useSelector](https://react.vlpt.us/redux/08-optimize-useSelector.html)
* [(참고) 리덕스 데브툴: Redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)

### 타입스크립트

- [참고](https://jeonghwan-kim.github.io/dev/2019/07/15/react-redux-ts.html)
- [참고](https://infoscis.github.io/2017/06/19/TypeScript-handbook-advanced-types/)

- I 프리픽스

  - [I-prefix 참고](https://github.com/microsoft/TypeScript-Handbook/issues/121)
  - [Interface](https://www.typescriptlang.org/docs/handbook/interfaces.html)

- [keyof-and-lookup-types-in-typescript](https://mariusschulz.com/blog/keyof-and-lookup-types-in-typescript)
- [a-complete-guide-to-react-hooks-and-typescript](https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c)

### 스타일

- [타입스크립트 스타일드 컴포넌트 설정](https://github.com/microsoft/typescript-styled-plugin/tree/f82699d1a0027cb850118adfcdd8cf88203573dc)
- [Read: naming-styled-components](https://medium.com/inturn-eng/naming-styled-components-d7097950a245)
- [Read: normalize-css-or-css-reset](https://medium.com/@elad/normalize-css-or-css-reset-9d75175c5d1e)
- [Read: em-vs-rem-vs-px](https://engageinteractive.co.uk/blog/em-vs-rem-vs-px)
- [Read: CSS/length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)

### 최적화

- [Read: webp](https://post.naver.com/viewer/postView.nhn?volumeNo=9688816&memberNo=1834)
- [Read: IntersectionObserver](https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver)
- [intersection-observer](https://velog.io/@yejinh/Intersection-Observer%EB%A1%9C-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
- [IntersectionObserver를 이용한 이미지 동적 로딩 기능 개선](https://tech.lezhin.com/2017/07/13/intersectionobserver-overview)
- [lazy-loading-images-complete-guide](https://imagekit.io/blog/lazy-loading-images-complete-guide/)
  ```html
  <img src="https://ik.imagekit.io/demo/img/image3.jpg?tr=w-400,h-300" />
  <img
    class="lazy"
    src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300,bl-30,q-50"
    data-src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300"
  />
  ```

### SEO

- [robots](https://www.robotstxt.org/robotstxt.html)

### 트러블 슈팅

- ```powershell
  $ npm install --save-dev typescript-styled-plugin typescript
  ```

- 터미널에서 tsc 관리자 권한 실행 오류

  - powershell 권한 설정
    ```powershell
    $ Set-ExecutionPolicy Unrestricted
    ```

- tsc, import path alias

  ```json
  // tsconfing.json
  {
    "extends": "./tsconfig.paths.json"
  }
  ```

  ```json
  // tsconfig.paths
  {
    "compilerOptions": {
      "baseUrl": "./",
      "paths": {
        "~/*": ["./src/*"]
      }
    }
  }
  ```

- Property 'hot' does not exist on type 'NodeModule'.

  - npm install --save @types/webpack-env

- 깃 대소문자 민감도 설정

  ```
  git config core.ignorecase false
  ```

### 개발하면서 느낀 점

- API 추상화에 대한 부분

개발 초기에는 서비스 페이지나 특정 컴포넌트 단위에 따라서 가져오는 데이터가 다를 것이라고 생각하였으나 결국 이런 복잡한 흐름도 사실은 여러 슬라이스를 통해 응답한 결과 데이터는 동영상을 복수 개로 가져올 것인지 혹은 단수 개로 가져올 것인지에 대한 것으로 추상화 되었다.
