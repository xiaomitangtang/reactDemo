--- react-dom

```
提供函数
render
      ReactDOM.render(element, container[, callback])
hydrate
      ReactDOM.hydrate(element, container[, callback])
unmounteComponentAdNode
      ReactDOM.unmountComponentAtNode(container)
findDOMNode
      ReactDOM.findDOMNode(component)
createPortal
      ReactDOM.createPortal(child, container)

react-dom/server
import ReactDOMServer from 'react-dom/server';

renderToString()
    ReactDOMServer.renderToString(element)
    renderToStaticMarkup()
    ReactDOMServer.renderToStaticMarkup(element)
          此方法与 renderToString 相似，但此方法不会在 React 内部创建的额外 DOM 属性

renderToNodeStream()
renderToStaticNodeStream()


合成事件


```
