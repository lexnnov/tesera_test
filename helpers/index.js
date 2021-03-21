const fetch = require('node-fetch')

export function generateLiteId () {
  const today = new Date()
  return today.getMilliseconds()
}

export function getTeseraGames (url, count) {
  const promisesArr = []
  const countsOfFetch = Math.ceil(count / 10)
  let limit = 10

  for (let i = 0; i < countsOfFetch; i++) {
    limit = count > limit ? limit : count
    promisesArr.push(fetch(url + `?Limit=${limit}&Offset=${i}`).then(res => res.json()))
    count = count - limit
  }

  return Promise.all(promisesArr)
}
