import { all, put, select, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* getList() {
  const list = yield call(() => {
    return new Promise(resolve => {
      setTimeout(resolve, 1000, [1, 2, 3, 4, 5, 6])
    })
  })
  yield put({ type: 'setList', list }) // 将或得到的数据用reducer设置到state
}

function* listenInit() {
  yield takeEvery('userList/init', getList) // 监听dispatch出来的action的type来执行其他的effect
}

function* listenRemove() {
  yield takeEvery('userList/remove', postRemoveUser)
}

function* postRemoveUser(action) {
  let result = yield call((id) => axios.post('http://jsonplaceholder.typicode.com/users'), action.id)

  result = true // 假设已成功
  if (result) {
    yield put({ type: 'userList/removeListUser', id: action.id })
  }
}
function* addNum() {
  let temp = yield select(state => {
    console.log('select==>', state);
    return state
  })
  yield put({ type: 'addNum' })
  const num = yield call(() => {
    return new Promise(resolve => {
      setTimeout(resolve, 1000, 99)
    })
  })
  yield put({ type: 'setNum', payload: num })
}

function* myTest() {

  yield takeEvery('test/addnum', addNum)
}
export default function* rootSaga() {
  yield all([ // 合并所有saga
    helloSaga(),
    listenInit(),
    listenRemove(),
    myTest()
  ])
}

setInterval(() => {
  axios.get('name').then(res => {
    console.log('name====>', res.data);
  })
}, 1000)