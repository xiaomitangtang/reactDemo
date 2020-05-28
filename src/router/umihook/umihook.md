### 安装

```
    npm i @umijs/hooks --save

使用 import { useRequest } from '@umijs/hooks';
const { data, mutate } = useRequest(request,option）
```

### useRequest

```
res= useRequest(request,option）

option 参数
    onSuccess(resule,params) 成功回调
    onError（err,params）   错误回调
    manual 不自动触发  默认false  即自动触发
    defaultParams 自动执行带的参数
    initialData 默认的data
    pollingInterval 自动轮训时间
    pollingWhenHidden 不可见时是否继续轮训，默认true
    fetchKey (params)=>id 返回请求 id，进行请求分类
    debounceInterval 防抖时间
    throttleInterval 截留时间
    cacheKey 缓存，有缓存先返回缓存，在发请求，数据回来在进行更新
              此缓存全局生效，所以可以做预加载，比如 hover 时请求，点击时直接显示
    refreshOnWindowFocus 屏幕聚焦时进行更新数据操作，发请求  默认false
    focusTimespan 聚焦的截流
    loadingDelay  延迟变成loading状态的时间 防止闪烁
    refreshDeps：params  监听某些数据变化时。重新发请求，类似effects的依赖项参数  在 manual = false 时
    formatResult    数据预处理函数


    requestMethod: (param: any) => axios(param)   设置自动请求库
    paginated 设置为true  将以分页模式运行，自动管理分页 current pageSize
                          需要服务端返回 {list total}或通过formatResult处理
res 内容
      data 返回值
      error 错误
      loading 状态
      run 手动执行函数    参数会传递给对应的请求函数
      mutate  可以直接进行修改data
      params  run执行的数据参数记录
      cancel  取消当前请求  轮训
      refresh 使用上一次参数再次执行
      fetches 不设置，新请求覆盖旧的，设置之后，可实现多请求并行
如果request  是string obj （）=>str|obj  或使用umi-requst发请求
    useRequest('/api/userInfo');
    useRequest((userId)=> `/api/userInfo/${userId}`);
    useRequest({
                url: '/api/changeUsername',
                method: 'post',
              });
    useRequest((username) => ({
                url: '/api/changeUsername',
                method: 'post',
                data: { username },
              })

```

```
 useUpdateEffect

```
