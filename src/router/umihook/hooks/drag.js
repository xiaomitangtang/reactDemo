import React, { useMemo, useState, Profiler } from 'react';
import { Checkbox, Col, Row, message, Input, Button } from 'antd';
import { useDrop, useDrag, useSelections, useDynamicList, useVirtualList, useDebounce, useDebounceFn, useMount, useToggle, useUpdate, useUnmount, useLocalStorageState, useUpdateEffect, useUpdateLayoutEffect } from '@umijs/hooks';
export const StorageDemo = () => {
  const [message, setMessage] = useLocalStorageState('user-message', 'Hello~');
  const [user, setUser] = useLocalStorageState('user', {
    id: 9234634791, name: 'Zhangsan', age: 33,
  });
  return (
    <>
      <Input
        style={{ width: 200 }}
        defaultValue={user.name}
        placeholder="input user name"
        onChange={e => {
          setUser((u) => ({ ...u, name: e.target.value }));
        }}
      />
      <hr />
      <Input
        value={message}
        onChange={e => {
          setMessage(e.target.value);
        }}
        placeholder="Please enter some words..."
        style={{ width: 200, marginRight: 16 }}
      />
      <Button
        onClick={() => {
          setMessage();
        }}
      >
        Reset
      </Button>
    </>
  );
}

export const MountDemo = () => {
  const { state, toggle } = useToggle(false);
  const { state: state2, toggle: toggle2 } = useToggle(true)
  return (<>
    <Button onClick={() => toggle()}>{state ? 'unmount' : 'mount'}</Button>
    {state && <MyComponent />}
    <Button onClick={() => toggle2()}>{state2 ? 'mount' : 'unmount'}</Button>
    {state2 && <MyComponent2 />}
  </>);
}
const MyComponent = () => {
  useMount(
    () => {
      message.info('mount');
    }
  );

  return (<div>Hello World</div>)
}
const MyComponent2 = () => {
  useUnmount(
    () => {
      message.info('unmount');
    }
  );

  return (<div>Hello World</div>)
}

export const DragDemo = () => {
  const getDragProps = useDrag();
  const [props, { isHovering }] = useDrop({
    onText: (text, e) => {
      console.log(e);
      message.success(`'text: ${text}' dropped`);
    },
    onFiles: (files, e) => {
      console.log(e, files);
      message.success(`${files.length} file dropped`);
    },
    onUri: (uri, e) => {
      console.log(e);
      message.success(`uri: ${uri} dropped`);
    },
    onDom: (content, e) => {
      message.success(`custom: ${content} dropped`)
    }
  });
  window.dragData = {
    getDragProps, props, isHovering
  }
  console.log('DragDemo', window.dragData)
  return (
    <div>
      <div style={{ border: '1px dashed #e8e8e8', padding: 16, textAlign: 'center' }} {...props}>
        {isHovering ? 'release here' : 'drop here'}
      </div>

      <div style={{ display: 'flex', marginTop: 8 }}>
        {
          Array.from(Array(5)).map((e, i) => (
            <div
              {...getDragProps(`box${i}`)}
              style={{ border: '1px solid #e8e8e8', padding: 16, width: 80, textAlign: 'center', marginRight: 16 }}
            >
              box{i}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export const SelectDemo = () => {
  const [hideOdd, setHideOdd] = useState(false);
  const list = useMemo(() => {
    if (hideOdd) {
      return [2, 4, 6, 8];
    }
    return [1, 2, 3, 4, 5, 6, 7, 8];
  }, [hideOdd]);

  const { selected, allSelected, isSelected, toggle, toggleAll, partiallySelected } = useSelections(
    list,
    [1]
  );

  return (
    <div>
      <div>Selected : {selected.join(',')}</div>
      <div style={{ borderBottom: '1px solid #E9E9E9', padding: '10px 0' }}>
        <Checkbox checked={allSelected} onClick={toggleAll} indeterminate={partiallySelected}>
          Check all
        </Checkbox>
        <Checkbox checked={hideOdd} onClick={() => setHideOdd(v => !v)}>
          Hide Odd
        </Checkbox>
      </div>
      <Row style={{ padding: '10px 0' }}>
        {list.map(o => (
          <Col span={12} key={o}>
            <Checkbox checked={isSelected(o)} onClick={() => toggle(o)}>
              {o}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export const DynamicListDemo = () => {
  const res = useDynamicList(['David', 'Jack']);
  let { list, remove, getKey, push } = res
  console.log(list, 'list')
  window.dynamicRes = res
  return <>
    <ul>
      {list.map((i, index) => {
        return <li key={getKey(index)}>{i}
          <button onClick={() => console.log('----click', { getKey: getKey(index), item: i })}>点我</button>
          <button onClick={() => remove(index)}>点我remove</button>
        </li>
      })}
    </ul>
    <button onClick={() => push('')}>点我push</button>
  </>
}


export const VirtualListDemo = () => {
  const res = useVirtualList(Array.from(Array(99999).keys()), {
    overscan: 3,
    itemHeight: 30,
  });
  window.virtualData = res
  let { list, containerProps, wrapperProps } = res
  return (
    <>
      <div {...containerProps} style={{ height: '300px', overflow: 'auto' }}>
        <div {...wrapperProps}>
          {list.map((ele, index) => (
            <div
              style={{
                height: 22,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #e8e8e8',
                marginBottom: 8,
              }}
              key={ele.index}
            >
              Row: {ele.data}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export const DebounceDemo = () => {
  const [value, setValue] = useState();
  const debouncedValue = useDebounce(value, 500);
  console.log('debouncedValue', debouncedValue)
  return (
    <div>
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
    </div>
  );
}


export const DebounceFnDemo = () => {
  const [value, setValue] = useState(0);
  const { run } = useDebounceFn(() => {
    setValue(value + 1);
  }, 500);

  return (
    <div>
      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
      <Button onClick={run}>Click fast!</Button>
    </div>
  );
};