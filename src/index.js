import React, { StrictMode } from 'react'
import ReacDom from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/index'
import App from './index.jsx'
import { AppContext, AppContext2 } from './test/useContext.js'
import './mock/index'
import './styles'
class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.updateContext = this.updateContext.bind(this)
    this.state = {
      hasError: false,
      Context1: { name: 'xiaomi' },
      Context2: {
        context2: '第二个context',
        change: this.updateContext
      }
    }
  }
  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log('来自错误边界打印的  getDerivedStateFromError===============>', error)
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    console.log('来自错误边界打印的  componentDidCatch==>', error, errorInfo)
  }
  updateContext() {
    let { Context1, Context2 } = this.state
    this.setState({
      Context1: { ...Context1, name: Context1.name + 'new;' },
      Context2: { ...Context2, context2: Context2.context2 + 'new;' }
    })
  }
  renderChild() {
    let { Context1, Context2 } = this.state
    return (
      <>
        <Provider store={store}>
          <AppContext.Provider value={Context1}>
            <AppContext2.Provider value={Context2}>
              <StrictMode>
                <App></App>
              </StrictMode>
            </AppContext2.Provider>
          </AppContext.Provider>
        </Provider>
      </>
    )
  }
  render() {
    let { hasError } = this.state
    if (!hasError) {
      return this.renderChild()
    }
    return <h1>有错误</h1>
  }
}
// console.log('XXXXXX', XXXXXX)
let content = <Wrapper />
ReacDom.render(content, document.getElementById('app'), () => {
  console.log('app,已经挂载')
})
