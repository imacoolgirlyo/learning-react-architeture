/* @jsx createElement */

// babel에게 jsx 구문을 compile 할 때 createElement method로 변환하겠다고 알려주는 것임
import { createElement, render, Component } from './react.js'

class YourTitle extends Component {
  render () {
    return <p>haha</p>
  }
}

function Title () {
  return (
    <div>
      <h2>title?</h2>
      <YourTitle />
      <p>yes!</p>
    </div>
  )
}

console.log(Title())

render(<Title />, document.querySelector('#root'))
