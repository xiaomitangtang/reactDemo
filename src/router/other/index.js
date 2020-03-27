import React, { Component } from 'react'

const htmlStr = `
  <div>这是外部注入的html字符串</div>
  <div>这是外部注入的html字符串</div>
  <div>这是外部注入的html字符串</div>
  <div>这是外部注入的html字符串</div>
  <div>这是外部注入的html字符串</div>
`
const html = { __html: htmlStr }
export default class Other extends Component {
  constructor(props) {
    super(props)
    this.eventTest = this.eventTest.bind(this)
  }
  getCheckCode() {
    return <>
      <hr />
      <div>
        <h4>checked</h4>
        <div>
          checkbox 或 radio 时，组件支持 checked
        </div>
      </div>
    </>
  }
  getClassNameCode() {
    return <>
      <hr />
      <div>
        <h4>className</h4>
        <div>
          className 属性用于指定 CSS 的 class
        <div>
            Web Components（这是一种不常见的使用方式），请使用 class 属性代替。
        </div>
        </div>
      </div>
    </>
  }
  getDangerouslySetInnerHTML() {
    return <>
      <hr />
      <div>
        <h4>dangerouslySetInnerHTML</h4>
        <div>
          当你想设置 dangerouslySetInnerHTML 时，需要向其传递包含 key 为 __html 的对象，以此来警示你
        <div dangerouslySetInnerHTML={html}></div>
        </div>
      </div></>
  }
  getHemlForCode() {
    return <>
      <hr />
      <h4>htmlFor</h4>
      <div>
        由于 for 在 JavaScript 中是保留字，所以 React 元素中使用了 htmlFor 来代替
    </div>
    </>
  }
  getStyleCode() {
    return <>
      <hr />
      <h4>style</h4>
      <div>
        样式不会自动补齐前缀。如需支持旧版浏览器，请手动补充对应的样式属性 <br />
        React 会自动添加 ”px” 后缀到内联样式为数字的属性后。如需使用 ”px” 以外的单位，请将此值设为数字与所需单位组成的字符串
    </div>
    </>
  }
  getSuppressContentEditableWarning() {
    return <>
      <h4>suppressContentEditableWarning</h4>
      <h4>suppressHydrationWarning</h4>
      <h4>All Supported HTML Attributes</h4>
      <div>
        accept acceptCharset accessKey action allowFullScreen alt async autoComplete
        autoFocus autoPlay capture cellPadding cellSpacing challenge charSet checked
        cite classID className colSpan cols content contentEditable contextMenu controls
        controlsList coords crossOrigin data dateTime default defer dir disabled
        download draggable encType form formAction formEncType formMethod formNoValidate
        formTarget frameBorder headers height hidden high href hrefLang htmlFor
        httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list
        loop low manifest marginHeight marginWidth max maxLength media mediaGroup method
        min minLength multiple muted name noValidate nonce open optimum pattern
        placeholder poster preload profile radioGroup readOnly rel required reversed
        role rowSpan rows sandbox scope scoped scrolling seamless selected shape size
        sizes span spellCheck src srcDoc srcLang srcSet start step style summary
        tabIndex target title type useMap value width wmode wrap
      </div>

    </>
  }
  eventTest(e) {
    // e.persist()

    console.log('e==>', e);
    Object.entries(e).forEach(([key, value]) => {
      console.log(key, '===>', value);
    })
  }
  getEventCode() {
    return <>
      <button onClick={this.eventTest}>eventTest</button>
      <div>
        e.stopPropagation() 或者 e.preventDefault() <br /><br />
        SyntheticEvent 是合并而来。这意味着 SyntheticEvent 对象可能会被重用，而且在事件回调函数被调用后，所有的属性都会无效<br /><br />

        如果你想异步访问事件属性，你需在事件上调用 event.persist()，此方法会从池中移除合成事件，允许用户代码保留对事件的引用。<br /><br />
        如需注册捕获阶段的事件处理函数，则应为事件名添加 Capture。例如，处理捕获阶段的点击事件请使用 onClickCapture，而不是 onClick
      </div>

    </>

  }
  render() {

    return <div>
      Other
      {this.getCheckCode()}
      {this.getClassNameCode()}
      {this.getDangerouslySetInnerHTML()}
      {this.getHemlForCode()}
      {this.getStyleCode()}
      {this.getSuppressContentEditableWarning()}
      {this.getEventCode()}
    </div>
  }
}