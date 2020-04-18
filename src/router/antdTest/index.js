import React from 'react'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';


import DatePickerDemo from './demos/datepicker'
import SimpleDemo from './demos/simple'
import Icons from './demos/icons'
import StepsDemo from './demos/steps'
import DataInput from './demos/data-input'
import FormDemo from './demos/form'
export default class AntDemo extends React.Component {
  render() {
    return <>
      <ConfigProvider locale={zhCN}>
        <h3>antd  demo</h3>
        <FormDemo></FormDemo>
        <DataInput></DataInput>
        <StepsDemo></StepsDemo>
        <DatePickerDemo></DatePickerDemo>
        <SimpleDemo></SimpleDemo>
        <Icons></Icons>
      </ConfigProvider>
    </>
  }
}