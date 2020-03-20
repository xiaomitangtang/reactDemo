import React from 'react'
import ReacDom from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/index'
import App from './index.jsx'
import { AppContext } from './test/useContext.js'
import './mock/index'
const content = <Provider store={store}>
  <AppContext.Provider value={{ name: "xiaomi" }}>
    <App></App>
  </AppContext.Provider>
</Provider>


ReacDom.render(content, document.getElementById('app'))