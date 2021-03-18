// /* @jsx createElement */
// babel에게 jsx 구문을 compile 할 때 createElement method로 변환하겠다고 알려주는 것임
import { createElement, render } from './react.js'; // class YourTitle extends Component {
//   render () {
//     return <p>haha</p>
//   }
// }

function Title() {
  return createElement("div", {
    name: "parents"
  }, createElement("h2", {
    name: "child1"
  }, "title?"), createElement("p", {
    name: "child2"
  }, "yes!"), createElement("span", {
    name: "child3"
  }, "\uBB34\uC544\uD638"));
}

console.log(Title());
render(createElement(Title, null), document.querySelector('#root'));