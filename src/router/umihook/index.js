import React, { Profiler } from 'react'
import { RequestHook, UmiHook2, UmiRequst, UmiRequestPage } from './hooks/requstHook'
import { DragDemo, SelectDemo, DynamicListDemo, VirtualListDemo, DebounceDemo, DebounceFnDemo, MountDemo, StorageDemo } from './hooks/drag'
import { SizeDemo } from './hooks/domhook'
export default () => {
  return <Profiler id='hook' onRender={(...r) => console.log('Profiler   hook===>', r)}>
    <h1>umi hook</h1>
    <SizeDemo></SizeDemo>
    <StorageDemo></StorageDemo>
    <MountDemo></MountDemo>
    <DebounceFnDemo></DebounceFnDemo>
    <DebounceDemo></DebounceDemo>
    <VirtualListDemo></VirtualListDemo>
    <DynamicListDemo></DynamicListDemo>
    <SelectDemo></SelectDemo>
    <DragDemo></DragDemo>
    <RequestHook></RequestHook>
    <UmiHook2></UmiHook2>
    <UmiRequst></UmiRequst>
    <UmiRequestPage></UmiRequestPage>
    {/* <UmiRequestLoadMore></UmiRequestLoadMore> */}
  </Profiler >
}








