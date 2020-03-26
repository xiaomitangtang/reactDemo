import React, { lazy, Suspense } from 'react'
import {
  Link, Route, BrowserRouter, HashRouter, Redirect, useParams, Prompt,//在路由切换时会执行，可以进行离开确认之类的
  useRouteMatch, withRouter
} from 'react-router-dom'
// const wrapBySuspen = Com => <Suspense fallback={<div>Loading...</div>}>{<Com />}</Suspense>
const wrapBySuspen = Com => <Suspense fallback={<div>Loading...</div>}>{<Com />}</Suspense>
const Sub1 = lazy(() => import('./Sub1'))
const Sub2 = lazy(() => import('./Sub2'))
const Sub3 = lazy(() => import('./Sub3'))
class Sub extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
    this.inputChange = this.inputChange.bind(this)
  }

  inputChange(e) {
    let text = e.target.value
    this.setState({ text })
  }
  render() {
    console.log('Sub  props==>', 'this-->', this, 'props', this.props);
    let { text } = this.state
    let { path, url } = this.props.match

    const subRouteList = [
      { path: `${url}/Sub1`, key: "Sub1", keyr: "Sub1r", com: wrapBySuspen(Sub1) },
      { path: `${url}/Sub2`, key: "Sub2", keyr: "Sub2r", com: wrapBySuspen(Sub2) },
      { path: `${url}/Sub3`, key: "Sub3", keyr: "Sub3r", com: wrapBySuspen(Sub3) },
    ]
    return (
      <div>
        <div className='box'>
          {subRouteList.map(i => <MyLink to={i.path} key={i.key} label={i.key}></MyLink>)}
        </div>
        <div>
          {subRouteList.map(i => <Route path={i.path} key={i.keyr} children={i.com} exact />)}
        </div>
        <hr />
        <div>
          <input type="text" onChange={this.inputChange} />
          <Prompt when={!!text} message='确定要离开吗？'></Prompt>
        </div>
      </div>

    )
  }
}

export default withRouter(Sub)

function MyLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });
  return <div className={match ? "active" : ""}>
    {match && "> "}
    <Link to={to} activeClassName="active">{label}</Link>
  </div>

}


