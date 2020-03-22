## 개발 참고

- 리액트 <기본>

  - [React](https://ko.reactjs.org/docs/getting-started.html)
  - [CRA](https://create-react-app.dev/)

* 라우트 설정

  - [react-router](https://reacttraining.com/react-router/web/guides/quick-start)

* 환경 설정 오버라이딩

  - [customize-cra](https://github.com/arackaf/customize-cra)
  - [react-app-rewired](https://github.com/timarney/react-app-rewired)

* 리액트 <고급>

  - [코드 스플릿팅]()
  - [throttle-debounce]()

* API 개발

  - [axios](https://github.com/axios/axios)
  - [API 연동](ttps://velog.io/@smooth97/Netflix-Clone-1-API-)

* 상태 관리, Redux

  - [redux](https://redux.js.org/introduction/getting-started)
  - [react-redux](https://github.com/reduxjs/react-redux)
  - [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
  - [redux-thunk](https://github.com/reduxjs/redux-thunk)
    - [참고](http://react.vlpt.us/redux-middleware/04-redux-thunk.html)
  - [Redux Toolkit](https://redux-toolkit.js.org/)

* SESSION

  - 로그인, 권한 등

* SEO

  - [robots](https://www.robotstxt.org/robotstxt.html)

* 타입스크립트

  - [참고 블로그](https://infoscis.github.io/2017/06/19/TypeScript-handbook-advanced-types/)

---

### 트러블 슈팅

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
