## 개발 참고

- 리액트 <기본>

  - [React](https://ko.reactjs.org/docs/getting-started.html)
  - [CRA](https://create-react-app.dev/)

* 리액트 <고급>

  - [코드 스플릿팅]()
  - [throttle-debounce]()

* 라우트 설정

  - [react-router](https://reacttraining.com/react-router/web/guides/quick-start)

* 환경 설정 오버라이딩

  - [customize-cra](https://github.com/arackaf/customize-cra)
  - [react-app-rewired](https://github.com/timarney/react-app-rewired)

- API 개발

  - [axios](https://github.com/axios/axios)
  - [API 연동](ttps://velog.io/@smooth97/Netflix-Clone-1-API-)

- 상태 관리, Redux

  - [redux](https://redux.js.org/introduction/getting-started)
  - [react-redux](https://github.com/reduxjs/react-redux)
  - [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
  - [rtk-convert-todos-example](https://github.com/reduxjs/rtk-convert-todos-example)
  - [redux-thunk](https://github.com/reduxjs/redux-thunk)
    - [참고](http://react.vlpt.us/redux-middleware/04-redux-thunk.html)
  - [Redux Toolkit](https://redux-toolkit.js.org/)
    - [참고 redux-react-guide](https://www.taniarascia.com/redux-react-guide/)
  - [redux-made-easy-with-redux-toolkit-and-typescrip](https://www.mattbutton.com/redux-made-easy-with-redux-toolkit-and-typescript/)

- SESSION

  - 로그인, 권한 등

- SEO

  - [robots](https://www.robotstxt.org/robotstxt.html)

- 타입스크립트

  - [참고](https://jeonghwan-kim.github.io/dev/2019/07/15/react-redux-ts.html)
  - [참고](https://infoscis.github.io/2017/06/19/TypeScript-handbook-advanced-types/)

  - I 프리픽스

    - [I-prefix 참고](https://github.com/microsoft/TypeScript-Handbook/issues/121)
    - [Interface](https://www.typescriptlang.org/docs/handbook/interfaces.html)

  - [keyof-and-lookup-types-in-typescript](https://mariusschulz.com/blog/keyof-and-lookup-types-in-typescript)

- 스타일

  - [타입스크립트 스타일드 컴포넌트 설정](https://github.com/microsoft/typescript-styled-plugin/tree/f82699d1a0027cb850118adfcdd8cf88203573dc)

---

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
