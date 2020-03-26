import React from 'react'
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'
import {
  Link, Route, useParams, Switch, Redirect, useLocation,
  useRouteMatch
} from 'react-router-dom'
export const Sub1 = () => <div>Sub1</div>
export const Sub2 = () => <div>Sub2</div>
export const Sub3 = () => <div>Sub3</div>
import './index.less'
export default () => {
  let match = useRouteMatch()
  let location = useLocation();
  let url = match.url
  let colors = [
    ['/hsl/10/90/50', 'Red', 'hsl', '/hsl/:h/:s/:l'],
    ['/hsl/120/100/40', 'Green', 'hsl', '/hsl/:h/:s/:l'],
    ['/rgb/33/150/243', 'Blue', 'rgb', '/rgb/:r/:g/:b'],
    ['/rgb/240/98/146', 'Pink', 'rgb', '/rgb/:r/:g/:b'],

  ]
  return (
    <div>
      <h1> 动画</h1>
      <div>
        {
          colors.map(([color, text]) => <Link key={color} style={{ margin: '10px' }} to={`${url}${color}`}>{text}</Link>
          )
        }
      </div>
      <hr />
      <div>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
          >
            <Switch location={location}>
              {
                colors.map(([color, text, type, path]) => <Route exact path={`${url}${path}`} key={color} children={<Color type={type} />} />)
              }
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>

  )
}

const colorSty = {
  width: '100px', height: '100px'
}
const colorParser = (type, params) => {
  switch (type) {
    case 'hsl':
      let { h, s, l } = params
      return `hsl(${h}, ${s}%, ${l}%)`
    case 'rgb':
      let { r, g, b } = params
      return `rgb(${r}, ${g}, ${b})`
  }
}
const Color = (props) => {
  let params = useParams()
  let type = props.type
  let style = {
    ...colorSty,
    border: "1px solid pink",
    backgroundColor: colorParser(type, params)
  }
  return <div style={style}>
    <h3>{type}</h3>
  </div>
}



