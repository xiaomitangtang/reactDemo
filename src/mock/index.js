import Mock from 'mockjs'
Mock.mock('name', 'get', {
  'name|1-100': 0,
  "age|1": [1, 2, 3],
  "arr|1-10": 1,
  "friends|10": [{
    first: '@FIRST',
    middle: '@FIRST',
    last: '@LAST',
    full: '@first @middle @last',
  }]
})
// Mock.mock({
//   "GET /name": {
//     first: '@FIRST'
//   }
// })