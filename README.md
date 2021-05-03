### [Babel](https://babeljs.io/)

- React로 작성하는 코드는 JSX 이기 때문에 브라우저가 알아들을 수 있는 javascript 코드로 변환해줘야 한다.
- 이 역할을 Babel이 함.

```json
//package.json
"scripts" : {
  "build" : "babel src -d build -w
}
```

- 전체 src directory를 build 라는 output directory에 컴파일시키기 위해서 `-d` 옵션 사용 (또는 `--out-dir`)도 사용 가능
- 매번 코드를 변경할 때마다 compile 하기 위해서 `-w` 옵션 사용

[참고: Compile Files (Babel)](https://babeljs.io/docs/en/babel-cli#compile-files)

### [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)

- @babel/preset-react 의 역할은?

### [JSX](https://reactjs.org/docs/introducing-jsx.html) 란?

```jsx
const element = <div> hello !</div>
```

- 이건 string 도 아니고 HTML 엘리먼트도 아니다. 이는 JSX 문법
- 렌더링 로직이 event handler, state의 변화, UI 를 보여주기 전의 데이터 준비 과정등의 UI 로직과 크게 관련있기 때문에 이와 같은 문법을 만들었다.
- JSX는 React.element를 만들어냄.
- markup 작성과 관련 logic을 별도의 파일로 작성하기보다는 하나의 컴포넌트 안에서 작성할 수 있도록 함

```jsx
const element = <div> hello ! {name}</div>
```

- curly brace 안에 어떤 js expression이던 작성 가능하다.
- babel이 JSX을 React.createElement() 호출로 변환시킨다.

```js
const title = <div className='container'>title</div>

const title = React.createElement('div', { className: 'container' }, 'title')
```

- React.createElement() 의 결과는 대략 이렇게 생겼는데, 이는 화면에 보여졌으면 하는 것들의 description이라고 생각하면 쉽다.

```js
const title = {
  tagName: 'div',
  props: {
    className: 'container',
    children: 'title'
  }
}
```

- React는 이 object를 읽어서 DOM을 생성하고, 이전에 만들었던 DOM과 비교해서 업데이트가 필요한 부분만 실제 DOM에 반영한다.
  [참고: JSX Represents Objects](https://reactjs.org/docs/introducing-jsx.html#jsx-represents-objects)

## 번외

### webpack

- 자바스크립트 모듈을 컴파일하기 위해 사용됨

  - [webpack이 javascript 모듈을 compile한다는 의미가 뭐지?](https://stackoverflow.com/questions/53582697/what-does-webpack-compiles-javascript-modules-mean)
    - 사실 webpack은 컴파일러가 아니라 번들러다. 대신 컴파일러와 비슷하게 소스 코드의 구문 분석을 한다.
    - 개발자가 작성하는 JS 최신 문법은 브라우저가 이해할 수 없다. 따라서 브라우저에서 동작할 수 있게끔 변환시키고 bundle한다.
    - 정리하자면, 웹팩은 (실행되지 않는) source 코드를 기계(브라우저)가 알아들을 수 있게 compile 시키는 역할을 한다.

- 우리가 작성하는 source 코드를 webpack으로 bundle해서 distribution code로 만든다.
  - 이때의 distribution 코드는 minimized 되고 optimized됨
  - 이렇게 번들된 코드가 브라우저에서 로드되 사용된다.
- webpack은 import, export 구문을 transpile 함

### [Spread in function calls](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_function_calls)

```js
function add (x, y, z) {
  return x + y + z
}

const arr = [1, 2, 4]
add(...arr) // add(1,2,4) 와 동일
add.apply(null, arr)
```

### Class Component, Functional Component

- Class 컴포넌트는 render시 instance를 생성해서 사용하기 때문에 state를 가지고 있을 수 있다.
- Functional 컴포넌트는 함수기 때문에 state를 가질 수 없는데, React가 기억하고 있다가 state를 주입해주는 식으로 state를 가질 수 있도록 구현되어있음(hooks)

## hooks 의 기본 원리

- 함수가 실행되는 횟수가 똑같다..?
- app이 100번 업데이트 해도, 함수형 컴포넌트가 30개가 있으면 매번 동일하게 호출이 되면서 render됨
