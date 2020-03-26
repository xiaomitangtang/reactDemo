import React, { Component } from 'react'
import { AppContext, AppContext2 } from '../../test/useContext'


window.AppContext2 = AppContext2
export default class TestChildren extends Component {
  static contextType = AppContext2
  render() {
    return <div>
      testChildren
      <div>
        {JSON.stringify(this.context)}
      </div>
      <hr />
      <h2>使用多个Context</h2>
      <div>
        < AppContext.Consumer>{context1 => JSON.stringify(context1)}</ AppContext.Consumer>
        < AppContext2.Consumer>{(context2) => {
          return <div>
            <button onClick={context2.change}>子组件改变context</button>
            <hr />
            {JSON.stringify(context2)}</div>
        }}</ AppContext2.Consumer>
      </div>
    </div>
  }
}