import React, { Fragment, Suspense, lazy } from 'react'
import { Link, Route, BrowserRouter, HashRouter, Redirect, Switch } from 'react-router-dom'
// import Detail from '../views/detail/index'
const Detail = lazy(() => import('../views/detail/index'))
// import List from '../views/list/index'
const List = lazy(() => import('../views/list/index'))
// import Sub, { Sub1, Sub2, Sub3 } from './subRouter'
const Sub = lazy(() => import('./subRouter'))
// import Recursive from './recursive'
const Recursive = lazy(() => import('./recursive'))
// import Transition from './transition'
const Transition = lazy(() => import('./transition'))
// import FragmentTest from './fragment'
const FragmentTest = lazy(() => import('./fragment'))

const TestContext = lazy(() => import('./testContext'))
const PortalDemo = lazy(() => import("./portal"))
const WebCom = lazy(() => import("./WebCom"))
const MemoryHelper = lazy(() => import('./memorizeHelper'))
const Other = lazy(() => import('./Other'))
const Hook = lazy(() => import('./hook'))
const AntDemo = lazy(() => import('./antdTest'))
const AntMotion = lazy(() => import('./motion'))
const UmiHook = lazy(() => import('./umihook'))
const EmojiDemo = lazy(() => import('./emoji'))
const D528 = lazy(() => import('./test528'))

import style from './index.less'
// link
//    to  可以是字符串  也可以是对象   pathname search hash state
// navLink   当路由匹配时,或加上  activeClassName   或者 activeStyle
//    isActive 额外逻辑处理高亮
// MemoryRouter
import hoisNonReactStatic from 'hoist-non-react-statics'
// 高阶组件  务必复制静态方法
//  hoisNonReactStatic(Enhance,Com)   在高阶组件返回新组件前调用
export default class Routes extends React.Component {
  render() {
    return (
      <HashRouter basename='/aabb/cc' forceRefresh={true} getUserConfirmation={
        (e, callback) => {
          console.log('getUserConfirmation 获取到对应的路由变化监听', e);
          setTimeout(callback, 2000, true)
        }
      }>
        <div className='box'>
          <Link to='/list' className={style.link}>列表</Link>
          <Link to='/detail' className={style.link}>详情</Link>
          <Link to='/sub' className={style.link}>嵌套的路由</Link>
          <Link to='/recursive/1' className={style.link}>无限嵌套</Link>
          <Link to='/transition' className={style.link}>动画</Link>
          <Link to='/fragment' className={style.link}>fragment  解决语义化</Link>
          <Link to='/TestContext' className={style.link}>TestContext</Link>
          <Link to='/WebCom' className={style.link}>WebCom</Link>
          <Link to='/PortalDemo' className={style.link}>PortalDemo</Link>
          <Link to='/MemoryHelper' className={style.link}>MemoryHelper</Link>
          <Link to='/Other' className={style.link}>Other</Link>
          <Link to='/Hook' className={style.link}>Hook</Link>
          <Link to='/AntDemo' className={style.link}>AntDemo</Link>
          <Link to='/AntMotion' className={style.link}>AntMotion</Link>
          <Link to='/ssssss654/5454' className={style.link}>没有设置的路由</Link>
          <Link to='/UmiHook' className={style.link}>UmiHook</Link>
          <Link to='/EmojiDemo' className={style.link}>EmojiDemo</Link>
          <Link to='/D528' className={style.link}>D528</Link>
          {/* <p aria-required='xxx' > aria-ppp='xxx'</p> */}
        </div>
        <div>
          <Switch>
            <Route path='/' key='index' render={() => <Redirect to='list'></Redirect>} exact />
            {/* <Route path='/detail' key='detail' component={Detail} exact />
            <Route path='/list' key='list' component={List} exact />
            <Route path='/sub' key='sub' component={Sub} />
            <Route path='/recursive/:id' component={Recursive}></Route>
            <Route path='/transition' component={Transition}></Route>
            <Route path='/fragment' component={FragmentTest}></Route> */}

            <Route path='/detail' key='detail' children={
              wrapBySuspen(Detail)
            } exact />
            <Route path='/list' key='list' children={wrapBySuspen(List)} exact />
            <Route path='/sub' key='sub' children={wrapBySuspen(Sub)} />
            <Route path='/recursive/:id' children={wrapBySuspen(Recursive)}></Route>
            <Route path='/transition' children={wrapBySuspen(Transition)}></Route>
            <Route path='/fragment' children={wrapBySuspen(FragmentTest)}></Route>
            <Route path='/PortalDemo' children={wrapBySuspen(PortalDemo)}></Route>
            <Route path='/TestContext' children={wrapBySuspen(TestContext)}></Route>
            <Route path='/WebCom' children={wrapBySuspen(WebCom)}></Route>
            <Route path='/Hook' children={wrapBySuspen(Hook)}></Route>
            <Route path='/MemoryHelper' children={wrapBySuspen(MemoryHelper)}></Route>
            <Route path='/AntDemo' children={wrapBySuspen(AntDemo)}></Route>
            <Route path='/AntMotion' children={wrapBySuspen(AntMotion)}></Route>
            <Route path='/Other' children={wrapBySuspen(Other)}></Route>
            <Route path='/UmiHook' children={wrapBySuspen(UmiHook)}></Route>
            <Route path='/EmojiDemo' children={wrapBySuspen(EmojiDemo)}></Route>
            <Route path='/D528' children={wrapBySuspen(D528)}></Route>
            <Route path="*" >
              404
          </Route>
          </Switch>

        </div>
      </HashRouter >

    )
  }
}

const wrapBySuspen = Com => <Suspense fallback={<div>Loading...</div>}>{<Com />}</Suspense>


// defaultValue 
// defaultChecked
// componentDidMount      替换 componentWillMount
// 
/** 挂载
 constructor()
  static getDerivedStateFromProps()
  render()
  componentDidMount()
 */

/* 更新
 static getDerivedStateFromProps()
 shouldComponentUpdate()
 render()
 getSnapshotBeforeUpdate()
 componentDidUpdate()
*/
  //  componentDidUpdate   替换     componentWillUpdate
  //                       废弃     componentWillReceiveProps  

/*卸载
    componentWillUnmount

*/


/*错误处理
  static getDerivedStateFromError()
  componentDidCatch()

*/

/*其他
  api
    setState()
    forceUpdate()

  class 属性
    defaultProps
    displayName
  实例属性
    props
    state
*/