# movie-web

- [THE BASICS OF REACT](#the-basics-of-react)
  - [Before React](#before-react)
  - [Our First React Element](#our-first-react-element)

## THE BASICS OF REACT

### Before React

- 기존의 바닐라 js

  ```javascript
  <!DOCTYPE html>
  <html>
      <body>
          <span>Total clicks: 0</span>
          <button id="btn">Click me</button>
      </body>
      <script>
          let counter = 0;
          const button = document.getElementById("btn");
          const span = document.querySelector("span");
          function handleClick() {
              counter = counter + 1;
              span.innerText = `Total clicks: ${counter}`;
          }
          button.addEventListener("click", handleClick)
      </script>
  </html>
  ```

  1. HTML을 만든다.

  ```javascript
  <body>
    <span>Total clicks: 0</span>
    <button id="btn">Click me</button>
  </body>
  ```

  2. `Javascript`에서 가져온다.

  ```javascript
  const button = document.getElementById("btn");
  const span = document.querySelector("span");
  ```

  3. `event`를 감지한다.

  ```javascript
  button.addEventListener("click", handleClick);
  ```

  4. 데이터를 업데이트한다.

  ```javascript
  counter = counter + 1;
  span.innerText = `Total clicks: ${counter}`;
  ```

  이런 식으로 계속 만든다면 많은 함수와 이벤트리스너를 만들게될 것이다.

  위에서 작성한 바닐라js는 `vanilla.html` 파일에 옮기고 새로 작성해보자.

  ***

  - 우선, React JS를 설치하기 위해서는 두 개의 Javascript 코드를 import 해야 한다.

    - `react`

      - `https://unpkg.com/react@17.0.2/umd/react.production.min.js`

    - `react-dom`
      - `https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js`

  `index.html`로 돌아왔을 때 아무것도 없지만 `console`에 `React`를 부를 수 있어야 한다.

  ![Alt text](image.png)

  > 이렇게 뜬다면 `React`가 코드에 있다는 뜻이다.

### Our First React Element

- `React JS`: application을 interactive 하도록 만들어 주는 `library`

- `React-dom`: 모든 `react element`를 `HTML`의 `body`에 둘 수 있도록 해주는 `library` 혹은 `package`

  ***

- `React JS`로 `element`를 생성하는 어려운 방법

  > `React JS`가 어떤 방식으로 돌아가는지 하드코딩 해보는 것

  - `span` 만들기

  ```javascript
  const span = React.createElement("span", { id: "sexy-span", style: { color: "red" } }, "Hello I'm a span");
  ```

  여러 `argument`를 작성할 수 있다.

  > 굳이 기억할 필요는 없음

- `root` 만들기

  ```javascript
  const root = document.getElementById("root");
  ```

  - 보통 `body`에 `id="root"`를 만들어 `span`을 `root` 안에 두라고 함

- 바닐라js에서는 HTML을 먼저 만들고, 그걸 Javascript로 가져와서 HTML을 수정하는 과정이었음

- React JS에서는 Javascript로 시작해 HTML이 된다.
