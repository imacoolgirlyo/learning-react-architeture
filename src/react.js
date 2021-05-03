const hooks = []
let currentComponent = -1

export class Component {}

export function useState (initialValue) {
  const position = currentComponent

  if (!hooks[position]) {
    hooks[position] = initialValue
  }

  return [
    hooks[position],
    nextValue => {
      hooks[position] = nextValue
    }
  ]
}

function renderRealDOM (vdom) {
  if (typeof vdom === 'string') {
    return document.createTextNode(vdom)
  }

  if (vdom === undefined) return

  const $el = document.createElement(vdom.tagName)
  vdom.children.map(renderRealDOM).forEach(node => {
    $el.appendChild(node)
  })

  return $el
}

export const render = (function () {
  let prevVDom = null

  return function (nextVdom, container) {
    if (prevVDom === null) {
      prevVDom = nextVdom
    }

    container.appendChild(renderRealDOM(prevVDom))
  }
})()

export function createElement (tagName, props, ...children) {
  if (typeof tagName === 'function') {
    if (tagName.prototype instanceof Component) {
      const instance = new tagName({ ...props, children })
      return instance.render()
    } else {
      currentComponent++

      // return 되기 전에 hooks이 호출되어야 함
      return tagName.apply(null, props, [props, ...children])
    }
  }

  return { tagName, props, children }
}
