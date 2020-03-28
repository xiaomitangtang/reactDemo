import React, { useState } from 'react'
import { Typography, Affix, Divider, Button, Row, Col, Layout, Menu, Breadcrumb, Dropdown, Pagination, PageHeader } from 'antd';
import { withRouter, useRouteMatch } from 'react-router-dom'
import styles from '../index.less'
import {
  SearchOutlined, PieChartOutlined, DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DownOutlined
} from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;


export default () => {
  return <>
    <Buttons></Buttons>
    <Para></Para>
    <RC></RC>
    <Lay></Lay>
    <AffixDemo></AffixDemo>
    <Bread></Bread>
    <DropdownDemo></DropdownDemo>
    <Page></Page>
    <PageHead></PageHead>
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

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const Lay = () => <div className={styles['layout-box']}>

  <Layout>
    <Header>Header</Header>
    <Layout>
      <Sider collapsible breakpoint="lg" collapsedWidth="80" theme='light'>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <PieChartOutlined />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <DesktopOutlined />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <TeamOutlined />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <FileOutlined />
          </Menu.Item>
        </Menu>
      </Sider>
      <Content>Content</Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
</div >


const AffixDemo = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  return <>
    <Affix offsetTop={top}>
      <Button type="primary" onClick={() => setTop(top + 10)}>
        Affix top
        </Button>
    </Affix>
    <br />
    <Affix offsetBottom={bottom}>
      <Button type="primary" onClick={() => setBottom(bottom + 10)}>
        Affix bottom
        </Button>
    </Affix>
  </>
}



let Bread = () => {
  let r = useRouteMatch()
  console.log(r);


  return <>
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb></>
}

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
const DropdownDemo = () => <>
  <Dropdown.Button overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me
    </a>
  </Dropdown.Button>
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me <DownOutlined />
    </a>
  </Dropdown>
</>



const Page = () => {
  let onChange = (...arr) => {
    console.log('Page--onChange---', arr);
  }
  let onShowSizeChange = (...arr) => {
    console.log('Page--onShowSizeChange---', arr);
  }
  let showTotal = (...arr) => {
    console.log('Page--showTotal---', arr);
    return 'showTotal'
  }
  return <>
    <Pagination showSizeChanger defaultCurrent={1} showLessItems showTotal={showTotal} total={5000} showQuickJumper onChange={onChange} onShowSizeChange={onShowSizeChange} /></>
}

const PageHead = () => <>
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  /></>











