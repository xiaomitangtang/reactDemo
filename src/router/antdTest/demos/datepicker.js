import React from 'react'

import { DatePicker, message } from 'antd';
// import 'dayjs/locale/zh-cn'
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
export default class DatePickerDemo extends React.Component {
  state = {
    date: null,
  };

  handleChange = date => {
    message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}`);
    this.setState({ date });
  };
  render() {
    const { date } = this.state;
    return <>
      <h3>antd  demo</h3>
      <div>
        <DatePicker onChange={this.handleChange} />
        <div style={{ marginTop: 20 }}>
          当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
        </div>
      </div>
      <hr />
    </>
  }
}