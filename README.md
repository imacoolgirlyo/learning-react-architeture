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
- JSX는 babel 에 의해 compile 된 후에는 일반 javascript function으로 변환된다.
