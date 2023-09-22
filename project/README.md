- [CREATE REACT APP](#create-react-app)

  - [Introduction](#introduction)
  - [Tour of CRA](#tour-of-cra)

- [EFFECTS](#efects)

  - [useEffect](#useeffect)
  - [Deps](#deps)

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

- `vscode`에서 서버 여는 법
  - `npx`를 설치한 폴더로 들어간다.
    ```
    cd 폴더명
    ```
  - 서버를 구동시킨다.
    ```
    npm start
    ```
  - 자동으로 브라우저가 열리게 된다.

### Tour of CRA

- `src` 폴더에 `Button.js` 파일을 만들고 버튼을 만들어보자.

  ```jsx
  function Button({ text }) {
    return <button>{text}</button>;
  }

  export default Button;
  ```

- `App.js`에 `import` 하고 버튼 컴포넌트를 렌더링 해주자.

  ```jsx
  import Button from "./Button";

  function App() {
    return (
      <div>
        <h1>Welcom back!</h1>
        <Button text={"Continue"} />
      </div>
    );
  }

  export default App;
  ```

- `PropTypes`를 체크하고 싶으니 `prop-types`를 설치해보자.

  - 터미널에 위 명령어를 입력하면 된다.
    `npm i prop-types`

- `Button.js`

  ```jsx
  import PropTypes from "prop-types";

  function Button({ text }) {
    return <button>{text}</button>;
  }

  Button.propTypes = {
    text: PropTypes.string.isRequired,
  };

  export default Button;
  ```

- 익숙한 방식으로 작성할 수 있다.

  - 기존에 하던 코드와 똑같지만 다른 점은 서로 다른 파일들로 코드를 분할하는 등의 작업을 할 수 있게 된 것이다.
  - 또한, 특정 컴포넌트(여기서는 `Button`)를 위한 `css` 파일을 만들 수 있는 기능을 얻었다는 것이다.

- 먼저, `css`에 대한 두 가지 옵션이 있다.

  1.  `style.css`를 만들고 `import`해오는 것
      `style.css`

      ```css
      button {
        color: white;
        background-color: tomato;
      }
      ```

      `index.js`

      ```js
      import "./style.css";
      ...
      ```

      - `index.js`에 `style.css`를 `import` 한다면 `index.js`에 있는 모든 버튼은 배경이 빨간색인 버튼이 될 것이다.
      - 이때 다른 버튼을 만들고 이 버튼은 빨간색이 되지 않기를 원할 때, `index.js`에 `style.css`를 `import` 하지 않을 것이다.

  2.  `style prop`으로 `css` 변경하기
      `Button.js`
      ```jsx
      function Button({ text }) {
        return (
          <button
            style={{
              backgroundColor: "tomato",
              color: "white",
            }}
          >
            {text}
          </button>
        );
      }
      ```
      - 이 경우 `css` 파일이 없는 대신 `javascript`를 작성해야 한다.
      - 한 파일에 수많은 `css`가 한 파일에 존재할 것이다.

- 이를 동시에 해결하기 위한 `create-react-app`의 핵심은 `CSS module`이다.

- `Button.css`의 파일 이름을 `Button.module.css`로 바꾼 뒤, `btn`이라는 클래스를 만들어보자.
  `Button.moduel.css`

  ```jsx
  .btn {
  color: white;
  background-color: tomato;
  }

  ```

  - `Button.moduel.css`를 `index.js`에 `import` 하지 않고, `Button.js`에 `import 해줄 것이다.`
    `Button.js`

    ```jsx
    import styles from "./Button.module.css";

    function Button({ text }) {
      return <button className={styles.btn}>{text}</button>;
    }
    ```

- 결국 `Button.module.css`에 `css` 코드를 작성하고 있지만, `create-react-app`은 `css` 코드를 `javascript` 오브젝트로 변환시켜주고 있다.

- 예를 들어, `App`을 위한 `App.module.css`도 만들 수 있다.

  `App.module.css`

  ```css
  .title {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  ```

  `App.js`

  ```js
  import styles from "./App.module.css";

  function App() {
    return (
      <div>
        <h1 className={styles.title}>Welcom back!</h1>
        <Button text={"Continue"} />
      </div>
    );
  }
  ```

## EFECTS

### useEffect

- `state`가 변화할 때 모든 컴포넌트는 다시 실행되고, 코드 또한 다시 실행된다.(리렌더링 된다.)

  - 하지만 api를 참조하는 것과 같이 첫 번째 렌더링에서만 실행되도록 하고 싶은 경우가 있다.

    ```jsx
    import { useState, useEffect } from "react";

    function App() {
      const [counter, setValue] = useState(0);
      const onClick = () => setValue((prev) => prev + 1);
      console.log("i run all the time");
      useEffect(() => {
        console.log("CALL THE API....");
      }, []);
      return (
        <div>
          <h1>{counter}</h1>
          <button onClick={onClick}>click me</button>
        </div>
      );
    }

    export default App;
    ```

    > `useEffect`는 두 개의 인자를 받는데, 첫 번째 인자는 한 번만 호출해줄 코드이고, 두 번째는 뒤에서 알아볼 것이다.

- 컴포넌트의 첫 번째 렌더링 시점에 `useEffect`는 함수를 호출해준다.

  - 코드 또한 렌더링 된다.

    <img src="./img/image.png" width="150">

  - 여기서 `state`의 변화가 생기면 `useEffect`는 함수를 호출하지 않는다.

    <img src="./img/image-1.png" width="150">

- 코드는 `state`가 변할 때마다 실행되는 반면, `useEffect` 안에 있는 함수는 한 번만 실행되었다.

- `useEffect`는 쉽게 말해서 코드가 한 번만 실행되도록 보호해준다.

### Deps

- `input`을 추가하고 안에 이벤트리스너로 사용자의 입력값을 받아보자.

  `App.js`

  ```jsx
  import { useState, useEffect } from "react";

  function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("i run all the time");
    useEffect(() => {
      console.log("CALL THE API....");
    }, []);
    return (
      <div>
        <input
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="Search here..."
        ></input>
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
      </div>
    );
  }

  export default App;
  ```

  - 새로운 `useState`와 `onChange` 함수를 만들어 `input` 안에 이벤트리스너를 만들어 사용자가 입력한 값을 받을 수 있게 만들었다.

    <img src="./img/image-2.png" width="150">

    - 하지만 값을 입력하거나 바꿀 때마다 `state`를 변경시켜 모든 컴포넌트를 리렌더링 하고 있다. 다행히 `useEffect`를 사용해 api를 매번 렌더링하는 것은 막고 있다.

- 이번에 하고 싶은 것은 검색이다.

  - 검색창에 무언가를 입력했을 때 입력 api를 사용한다고 해보자. 그렇지만 입력할 때마다 입력 api를 불러오고 싶지는 않다.

- 입력창에 `marvel`을 검색해보자.

  ```jsx
  import { useState, useEffect } from "react";

  function App() {
    ...
    console.log("i run all the time");
    useEffect(() => {
      console.log("CALL THE API....");
    }, []);
    console.log("SEARCH FOR", keyword);
    return (
      ...
    );
  }
  ```

  <img src="./img/image-3.png" width="150">

  - `marvel`을 찾았으니 목적은 달성했다. 하지만, 여기서 버튼을 계속 누르면 값을 계속 찾게 된다.

    <img src="./img/image-4.png" width="150">

    - 검색 키워드에 변화가 있을 때만 검색을 하고 싶은 것이지, `counter`가 변화할 때에도 검색을 하고 싶은 것은 아니다.

- `useEffect` 함수를 하나 더 작성해보자.

  ```jsx
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]);
  ```

  - 여기서 하는 것은 "`keyword`가 변화할 때만 코드를 실행해라" 라고 하는 것이다.

    <img src="./img/image-5.png" width="150">

    - 더이상 검색은 하지 않는 것을 볼 수 있다.

- 아직 완벽하다고 할 수 없는데, 그 이유는 브라우저를 처음 시작할 때에도 검색이 되고 있기 때문이다.

  ```jsx
  useEffect(() => {
    if (keyword !== "" && keyword.length > 6) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  ```

  - 위와 같은 조건을 달면 브라우저를 처음 시작할 때 검색이 되지 않는다.

  - `useEffect`의 두 번째 인자를 다르게 함으로써 특정 코드를 조건에 맞게 렌더링할 수 있다.

    ```jsx
    useEffect(() => {
      console.log("I run only once.");
    }, []);
    useEffect(() => {
      console.log("I run when 'keyword' changes");
    }, [keyword]);
    useEffect(() => {
      console.log("I run when 'counter' changes");
    }, [counter]);
    useEffect(() => {
      console.log("I run when 'keyword' & 'counter' changes");
    }, [keyword, counter]);
    ```
