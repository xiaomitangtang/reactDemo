import React, { useState } from 'react'
import { Button, Input, message } from 'antd';
import { useRequest, useDrop, useDrag } from '@umijs/hooks';
import { remote, changeUsername, number, getPageData } from './requst'



export const RequestHook = () => {
  const res = useRequest(remote, {
    cacheKey: 'count',
    refreshOnWindowFocus: true
  })
  console.log('useRequest', res)
  return <div>
    <h3>useRequest</h3>
    <div>
      {number}
    </div>
    <Button onClick={() => res.run('这是run的数据')}>run</Button>
    <hr />

  </div>
}
export const UmiHook2 = () => {
  const [state, setState] = useState('');
  const { loading: loading2, run, mutate, data } = useRequest(changeUsername, {
    manual: true,
    loadingDelay: 100,
    // pollingInterval: 1000,
    // pollingWhenHidden: false,
    onSuccess: (result, params) => {
      console.log(result, params)
      if (result.success) {
        setState(params[0]);
        message.success(`The username was changed to "${params[0]}" !`);
      }
    }
  });
  return <div>
    <Input
      onChange={e => setState(e.target.value)}
      value={state}
      placeholder="Please enter username"
      style={{ width: 240, marginRight: 16 }}
    />
    <Button onClick={() => run(state)} loading={loading2}>
      Edit
  </Button>
    <br />
    {JSON.stringify(data)}
    <Button onClick={() => mutate('mutate')}>
      mutate
  </Button>
  </div>
}
export const UmiRequst = () => {
  let { loading, data } = useRequest('/static/test.json', { debounceInterval: 1000 });
  console.log('UmiRequst===>', data)
  return <>
    {loading ? '正在加载' : JSON.stringify(data)}
  </>
}

export const UmiRequestPage = () => {
  let { loading, data, pagination, tableProps } = useRequest(getPageData, {
    cacheKey: 'paginationDemo',
    paginated: true,
    //  onSuccess(result, params) {
    //   console.log('onSuccess========>', result, params)
    // }
  });
  console.log('pagination', pagination)
  console.log('tableProps', tableProps)
  return <>
    <br />
    {loading ? '正在加载分页数据' : JSON.stringify(data.list)}
    <br />
    <Button loading={loading} onClick={() => pagination.onChange(pagination.current - 1, pagination.pageSize)}>上一页</Button>
    <Button loading={loading} onClick={() => pagination.onChange(pagination.current + 1, pagination.pageSize)}>下一页</Button>
  </>
}
const UmiRequestLoadMore = () => {
  let { loading, data, loadMore, loadingMore } = useRequest(getPageData, {
    cacheKey: 'loadMoreDemoCacheId',
    loadMore: true,
  });

  return <>
    <br />
    {loading ? '正在加载分页数据' : JSON.stringify(data.list)}
    <br />

    <Button
      onClick={loadMore}
      loading={loadingMore}
    >
      click to load more
      </Button>
  </>
}






