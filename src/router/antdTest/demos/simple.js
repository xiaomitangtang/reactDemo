import React, { useState } from 'react'
import { Typography, Divider, Button, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;


export default () => {
  return <>
    <Buttons></Buttons>
    <Para></Para>
    <RC></RC>
  </>
}


const Buttons = () => <>
  <h3>按钮</h3>
  <Button type="primary">Primary</Button>
  <Button>Default</Button>
  <Button type="dashed">Dashed</Button>
  <Button type="link">Link</Button>
  <Button type="primary" shape="circle" icon={<SearchOutlined />} />

  <hr />
</>


const Para = () => {
  let [str, setStr] = useState('This is an editable text.')
  return <>
    <Paragraph editable={{ onChange: setStr }}>{str}</Paragraph>
    <Paragraph copyable>This is a copyable text.</Paragraph>
    <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
  </>
}


const RC = () => <Row>
  <Col span={18} push={6}>
    col-18 col-push-6
</Col>
  <Col span={6} pull={18}>
    col-6 col-pull-18
</Col>
</Row>