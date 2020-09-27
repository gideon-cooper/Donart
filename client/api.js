import request from 'superagent'

const rootUrl = '/api/v1/donart'

export function getArt () {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}
export function editProfile (id, updatedInfo) {
  // console.log(id)
  // console.log(prof)
  // console.log(image)
  return request
    .post(rootUrl + '/editProfile/' + id)
    .send(updatedInfo)
    .then((res) => {
      console.log("api res: ", res.body)
      return res.body
    })
}

export function getOneArt (artId) {
  return request.get(rootUrl + '/art/' + artId).then((res) => {
    return res.body
  })
}

export function getUsers () {
  return request.get(`${rootUrl}/users`)
    .then(res => {
      // console.log('USERS', res.body.users, 'res.body', res.body)
      return res.body.users
    })
}

export function saveArtwork (artwork) {
  return request.post(`${rootUrl}/new-artwork`)
    .send(artwork)
    .then(response => {
      // console.log('API result: ', response.body)
      return response.body
    })
}
