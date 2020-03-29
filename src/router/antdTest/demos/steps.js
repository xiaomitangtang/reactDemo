import React from 'react'
import {
  SolutionOutlined,
  UserOutlined, LoadingOutlined, SmileOutlined

} from '@ant-design/icons';
import { Steps } from 'antd';

const { Step } = Steps;


export default () => {
  return <>
    <Steps current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>

    <Steps size="small" current={1}>
      <Step title="Finished" />
      <Step title="In Progress" />
      <Step title="Waiting" />
    </Steps>
    <Steps>
      <Step status="finish" title="Login" icon={<UserOutlined />} />
      <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
      <Step status="process" title="Pay" icon={<LoadingOutlined />} />
      <Step status="wait" title="Done" icon={<SmileOutlined />} />
    </Steps>
  </>

}