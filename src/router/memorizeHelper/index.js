import React, { Component } from 'react'
import memoize from 'memoize-one'

export default class MHelper extends Component {
  test = memoize((a, b) => {
    console.log('test', a, b);
    return a + b
  })
  render() {
    return <div>
      <h3>MHelper</h3>
      {
        [2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2].map((i, index) => <div key={index}> {this.test(1, i)} </div>)
      }
    </div>
  }
}