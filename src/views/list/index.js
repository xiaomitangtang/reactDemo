import React, { useContext, useState, useReducer, useEffect } from 'react'
import { AppContext } from '../../test/useContext.js'
import { myReducer, myReducerCreator } from '../../test/useReducer.js'
import TestChildren from './components/testChildren'



export default () => {
  let { name } = useContext(AppContext)
  let [count, setCounter] = useState(0)
  let handleClick = function () {
    return setCounter(count + 1)
  }
  const [state, dispatch] = useReducer(myReducer, { count: 99 });
  useEffect(() => {
    setTimeout(() => {
      console.log('useEffect');
      setCounter(0)
    }, 1000)
  }, [count])
  return <div>
    <div>list组件</div>
    {/* 全局共享属性 */}
    <div>useContext只能用于函数组件   {name}</div>
    <div >useState只能用于函数组件 <button onClick={handleClick}>点击设置state</button>  {count}</div>
    <div>useReducer只能用于函数类组件中
<button onClick={() => dispatch(myReducerCreator())}>点击设置state</button>
      {state.count}</div>
    <hr />
    <TestChildren>
      <div slot='111' name='外部传进来的' age={name}>12121 {name}</div>
      <div slot='222' name='外部传进来的' age={name}>12121 {name}</div>
    </TestChildren>
  </div>
}