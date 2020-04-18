import React from 'react'

import { DatePicker, message } from 'antd';
// import 'dayjs/locale/zh-cn'
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const { RangePicker } = DatePicker;
export default class DatePickerDemo extends React.Component {
  state = {
    date: null,
  };

  handleChange = date => {
    console.log(date);
    message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`);
    this.setState({ date });
  };
  render() {
    const { date } = this.state;
    return <>
      <div>
        <DatePicker onChange={this.handleChange} />
        <div style={{ marginTop: 20 }}>
          当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
        </div>
        <hr />
        <DatePicker onChange={this.handleChange} picker="week" />
        <br />
        <DatePicker onChange={this.handleChange} picker="month" />
        <br />
        <DatePicker onChange={this.handleChange} picker="quarter" />
        <br />
        <DatePicker onChange={this.handleChange} picker="year" />
      </div>
      <hr />


      <RangePicker />
      <br />
      <RangePicker showTime />
      <br />
      <RangePicker picker="week" />
      <br />
      <RangePicker picker="month" />
      <br />
      <RangePicker picker="year" />
    </>
  }
}