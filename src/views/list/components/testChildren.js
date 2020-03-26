import React, { Component } from 'react'




export default class TestChildren extends Component {
  constructor(props) {
    super(props)
    this.state = { name: 1 }
  }
  componentDidMount() {
    console.log('TestChildren组建==>', this);
  }
  render() {
    return [
      <div key='1'>内部</div>,
      <div key='11'>内部</div>,
      <div key='111'>内部</div>,
      <div key='1111'>内部</div>,
      this.props.children

    ]
  }
}