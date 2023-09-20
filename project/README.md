- [CREATE REACT APP](#create-react-app)
  - [Introduction](#introduction)

## CREATE REACT APP

### Introduction

1. node.js 설치

   - [node.js.org](https://nodejs.org/ko)
     <img src="../img/image-9.png" width="400" />

   - cmd에 `node-v`, `npx`를 입력했을 때 정상적으로 나온다면 완료
     <img src="../img/image-11.png" width="400" />

2. react-app 만들기

   - `npx create-react-app 폴더명`
   - 오류 발생 시
     1. npm 버전 업데이트
        `npm install -g npm@latest`
     2. npm 설정 초기화
        `npm config set registry https://registry.npmjs.org/`
     3. npm 캐시 삭제
        `npm cache clean --force`
     4. node.js 버전 확인
        `node -v`
     5. 프로젝트 디렉토리 생성
        `mkdir 디렉토리이름`
     6. 생성한 디렉토리로 이동
        `cd 디렉토리이름`
     7. react-app 생성
        `npx create-react-app .`
     8. `y` 입력

- `npm start` 를 입력하면 개발용 서버를 만들어준다.

- `src` 폴더는 모든 파일을 넣을 폴더인데 가장 중요한 파일은 `index.js`이다.

  - `create-react-app`은 어플리케이션을 가지고 `index.html` 안에 넣어주도록 설정되어 있다.

- `App.js`와 `index.js`만 남기고 나머지 파일들은 다 삭제해주자. 그리고 작성되어 있는 코드들은 간소화시키자.
  `App.js`

  ```jsx
  function App() {
    return (
      <div>
        <h1>Welcom back!</h1>
      </div>
    );
  }

  export default App;
  ```

  `index.js`

  ```jsx
  import React from "react";
  import ReactDOM from "react-dom";
  import App from "./App";

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
  ```
