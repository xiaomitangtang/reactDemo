import React, { Component, Profiler } from 'react'

export default class Web extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return <div >
      <h3 className='a123'>web component</h3>
      <hr />
      <div>webComponent 使用class  而不是className</div>
      <brick-flipbox class="demo">
        <div>front</div>
        <div>back</div>
      </brick-flipbox>
      <x-search>as</x-search>
    </div>
  }
}

class XSearch extends HTMLElement {
  connectedCallback(e) {
    console.log('connectedCallback', e);
  }
}

customElements.define('x-search', XSearch);






//render 组件




