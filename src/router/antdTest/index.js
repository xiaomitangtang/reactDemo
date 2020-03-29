import React from 'react'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';


import DatePickerDemo from './demos/datepicker'
import SimpleDemo from './demos/simple'
import Icons from './demos/icons'
import PageHeader from './demos/pageHeader'
import Steps from './demos/steps'
export default class AntDemo extends React.Component {
  render() {
    return <>
      <h3>antd  demo</h3>
      <ConfigProvider locale={zhCN}>
        <Steps></Steps>
        <PageHeader></PageHeader>
        <DatePickerDemo></DatePickerDemo>
        <SimpleDemo></SimpleDemo>
        <Icons></Icons>
      </ConfigProvider>
    </>
  }
}