import React, { useState } from 'react'
import { AutoComplete, Checkbox, Cascader } from 'antd';
export default () => <>
  <h1>和数据有关的</h1>
  <CascaderDemo></CascaderDemo>
  <CheckBoxDemo></CheckBoxDemo>
  <Complete></Complete>
</>


const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const Complete = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = searchText => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  const onSelect = data => {
    console.log('onSelect', data);
  };

  const onChange = data => {
    setValue(data);
  };

  return (
    <div>
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
        allowClear
        backfill
      />
      <br />
      <br />
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
    </div>
  );
};


const CheckBoxDemo = () => {
  let [value, setValue] = useState(false)
  let checkChange = (...arr) => {
    console.log('arr', arr);
  }
  return <>
    <Checkbox defaultChecked onChange={checkChange} />
    <Checkbox defaultChecked onChange={checkChange} />
    <Checkbox defaultChecked disabled >disabled</Checkbox>
    <hr />
    <Checkbox indeterminate checked={value} onChange={e => setValue(e.target.checked)} />
    <Checkbox checked={value} onChange={e => setValue(e.target.checked)} />
    <hr />
    <Checkbox.Group options={["1", "2"]}></Checkbox.Group>
  </>
}




const CascaderDemo = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  let onChange = (value) => {
    console.log(value);
  }
  let displayRender = (labels, selectedOptions) => {
    console.log('labels, selectedOptions', labels, selectedOptions);
    return labels.join(',')
  }
  return <>
    <Cascader showSearch options={options} onChange={onChange} placeholder="Please select" displayRender={displayRender} />
  </>
}


