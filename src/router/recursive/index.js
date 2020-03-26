import React from 'react'
import {
  Link, Route, useParams, Switch, Redirect, useLocation,
  useRouteMatch
} from 'react-router-dom'
export const Sub1 = () => <div>Sub1</div>
export const Sub2 = () => <div>Sub2</div>
export const Sub3 = () => <div>Sub3</div>

export default class Sub extends React.Component {
  render() {
    return (
      <Person />
    )
  }
}


function Person() {
  let loca = useLocation()
  console.log('useLocation', loca);
  let { url } = useRouteMatch();
  let params = useParams();
  let id = params.id
  let person = find(parseInt(id));
  return (person ?
    (<div>
      <h3>{person.name}’s Friends</h3>

      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path={`${url}/:id`}>
          <Person />
        </Route>
      </Switch>
    </div>)
    : '没有对应的'
  );
}


const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] }
];

function find(id) {
  return PEEPS.find(p => p.id === id);
}


