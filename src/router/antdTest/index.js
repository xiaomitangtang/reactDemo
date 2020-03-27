import React from 'react'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';


import DatePickerDemo from './demos/datepicker'
export default class AntDemo extends React.Component {
  render() {
    return <>
      <h3>antd  demo</h3>
      <ConfigProvider locale={zhCN}>
        <DatePickerDemo></DatePickerDemo>
      </ConfigProvider>
    </>
  }
}