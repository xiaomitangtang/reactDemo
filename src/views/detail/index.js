import React, { useState } from 'react'
import { connect } from 'react-redux'
import style from './index.less'
class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    console.log(this)
    this.props.dispatch({ type: 'userList/init' }) // 调用effect（saga）,
  }
  handleClick() {
    this.props.dispatch({ type: "test/addnum" })
  }
  render() {
    return <div >
      <div>detail</div>
      <button onClick={this.handleClick}>test/addnum</button>
      <div>{this.props.test}</div>
    </div>
  }
}



export default connect((state) => {
  return { list: state.userList.list, test: state.test } // 将store与组件连接起来。connect第一个参数是一个函数，要求返回用来描述props和store的对象。
})(Detail)