import React, { Fragment, Component } from 'react'
export default class FragmentTest extends Component {
  render() {
    return <Fragment>
      <div>fragment</div>

      <div>fragment</div>
      <hr />
      <SimpleF></SimpleF>
      <hr />
      <RefTest></RefTest>
    </Fragment>
  }
}


const SimpleF = (props) => (
  <>
    <div>SimpleF</div>
    <div>SimpleF</div>
  </>
)
// ref  两种使用方式，一个直接使用回调函数  一个使用 createRef
// 还可以父组件传递给子组件，子组件传给ref使得父组件可以操作子组件的元素
class RefTest extends Component {
  constructor(props) {
    super(props)
    this.div1 = React.createRef()
    this.childRef = React.createRef()
    this.div2 = null
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log('--------------------ref1-------------', this.div1);
    console.log('--------------------ref1--current-----------', this.div1.current);
    console.log('--------------------ref2-------------', this.div2);
    console.log('-----------------childRef------------', this.childRef);
  }
  render() {
    return <>
      <button onClick={this.handleClick}>点击打印Refs</button>
      <div ref={this.div1}>ref1  div1= React.createRef()</div>
      <div ref={div => { this.div2 = div }}>回调函数</div>
      <RefChildren forwardedRef={this.childRef}></RefChildren>
      {/* <WrapedRefchildren ref={this.childRef}></WrapedRefchildren> */}
    </>
  }
}

class RefChildren extends Component {

  render() {
    console.log('childRef', this.props);
    return <div ref={this.props.forwardedRef}>这是我想获取的div</div>
  }
}
const WrapedRefchildren = React.forwardRef((props, ref) => {
  // return <RefChildren {...props} ref={ref} />
  return <RefChildren {...props} forwardedRef={ref} />
})