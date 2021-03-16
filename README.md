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
