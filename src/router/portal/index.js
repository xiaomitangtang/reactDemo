import React, { Component, Profiler } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import styles from './index.less'
export default class PortalDemo extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      msg: "portal的内容", visible: false
    }
  }
  handleClick() {
    let { msg, visible } = this.state
    this.setState({
      msg: '--' + msg,
      visible: !visible
    })
  }
  onRender(...e) {
    // console.log('onRender', e);
  }
  render() {
    let { msg, visible } = this.state
    return <div className={styles.portal} onClick={this.handleClick}>
      <div>这是一个portal</div>
      {/* <button onClick={this.handleClick}>点击切换显示状态</button> */}
      <Profiler id='p' onRender={this.onRender}>
        <P visible={visible}>
          <Mouse render={mouse => (
            <Cat mouse={mouse} />
          )} />
        </P>

      </Profiler>


    </div>
  }
}
// portal  不管挂载到那个节点，都在react树中，事件会按照react树进行冒泡

const P = (props) => {
  let { visible } = props
  return createPortal(visible ? props.children : null, document.body)
}





//render 组件

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/static/qr.png" className={styles.catimg} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.hanhleMouseIn = this.hanhleMouseIn.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.state = { x: 0, y: 0, isIn: false };
  }
  handleMouseMove(event) {
    if (!this.state.isIn) return false
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }
  hanhleMouseIn() {
    this.setState({
      isIn: true
    });
  }
  handleMouseOut() {
    console.log('handleMouseOut');
    this.setState({
      isIn: false
    });
  }
  render() {
    let { handleMouseMove, hanhleMouseIn, handleMouseOut } = this
    return (
      <div className={styles.mousebox}
        onMouseMove={handleMouseMove}
        onMouseEnter={hanhleMouseIn}
        onMouseLeave={handleMouseOut}
        ref='ssdf'
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}


