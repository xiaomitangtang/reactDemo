import React from 'react'
import { Link, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Detail from '../views/detail/index'
import List from '../views/list/index'
import style from './index.less'
console.log(style);
export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='box'>
          <Link to='/list' className={style.link}>列表</Link>
          <Link to='/detail' className={style.link}>详情</Link>
        </div>
        <div>
          <Route path='/' key='index' render={() => <Redirect to='list'></Redirect>} exact />
          <Route path='/detail' key='detail' component={Detail} exact />
          <Route path='/list' key='list' component={List} exact />
        </div>
      </BrowserRouter>

    )
  }
}