# movie-web

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
    button.addEventListener("click", handleClick)
    ```

    4. 데이터를 업데이트한다.
    ```javascript
    counter = counter + 1;
    span.innerText = `Total clicks: ${counter}`;
    ```

    이런 식으로 계속 만든다면 많은 함수와 이벤트리스너를 만들게될 것이다.

    위에서 작성한 바닐라js는 `vanilla.html` 파일에 옮기고 새로 작성해보자.

    ---

    - 우선, React JS를 설치하기 위해서는 두 개의 Javascript 코드를 import 해야 한다.
    
        - `react`
            - `https://unpkg.com/react@17.0.2/umd/react.production.min.js`

        - `react-dom`
            - `https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js`
    
    `index.html`로 돌아왔을 때 아무것도 없지만 `console`에 `React`를 부를 수 있어야 한다.

    ![Alt text](image.png)
    > 이렇게 뜬다면 `React`가 코드에 있다는 뜻이다.
