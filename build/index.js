// /* @jsx createElement */
// babel에게 jsx 구문을 compile 할 때 createElement method로 변환하겠다고 알려주는 것임
import { createElement, render } from './react.js'; // class YourTitle extends Component {
//   render () {
//     return <p>haha</p>
//   }
// }

function Title() {
  return createElement("div", null, createElement("h2", null, "title?"), createElement("p", null, "yes!"));
}

console.log(Title());
render(createElement(Title, null), document.querySelector('#root'));