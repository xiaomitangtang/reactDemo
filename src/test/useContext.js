import React from 'react'
let AppContext = React.createContext({})
let AppContext2 = React.createContext({
  context2: "第二个Context2", change: () => {
    console.log('context2Change', this);
  }
})
AppContext.displayName = 'AppContext 给devTool展示的名字'
AppContext2.displayName = 'AppContext2 给devTool展示的名字'
export {
  AppContext,
  AppContext2
}

// useContext    只能使用在函数类型组件中，否则会报错