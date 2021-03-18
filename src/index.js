// /* @jsx createElement */

// babel에게 jsx 구문을 compile 할 때 createElement method로 변환하겠다고 알려주는 것임
import { createElement, render } from './react.js'

// class YourTitle extends Component {
//   render () {
//     return <p>haha</p>
//   }
// }

function Title () {
  return (
    <div name='parents'>
      <h2 name='child1'>title?</h2>
      <p name='child2'>yes!</p>
      <span name='child3'>무아호</span>
    </div>
  )
}

console.log(Title())

render(<Title />, document.querySelector('#root'))
