
export let number = 0
export const remote = () => new Promise((resolve, reject) => {
  console.log('remote执行了')
  setTimeout(() => {
    if (number % 2 === 0) {
      resolve(number)
    } else {
      reject(new Error('error'))
    }
    number += 2
  }, 1000)
})
export function changeUsername(username) {
  console.log('changeUsername==>', username);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 210);
  });
}


const PagesData = new Array(100).fill(1).map((i, index) => `第${index + 1}条数据`);
export function getPageData(params) {
  console.log('getPageData====>params', params)

  let { current, pageSize } = params
  return new Promise(resolve => {
    let start = pageSize * (current - 1)
    let end = start + pageSize
    let list = PagesData.slice(start, end)
    let data = {
      list,
      total: PagesData.length
    }
    setTimeout(() => resolve(data), 1000)
  })
}