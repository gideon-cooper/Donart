import request from 'superagent'

const rootUrl = '/api/v1/donart'

export function getArt () {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export function editProfile(id, prof) {
  console.log(id)
  console.log(prof)
  return request
    .post(rootUrl + '/editProfile/' + id)
    .send(prof)
    .then((res) => {
      console.log(res)
      return res.body
    })
}

export function getOneArt (artId) {
  return request.get(rootUrl + '/Artwork/' + artId).then((res) => {
    console.log()
    return res.body
  })
}

export function getUsers () {
  return request.get(`${rootUrl}/users`)
    .then(res => {
      console.log('USERS', res.body.users, 'res.body', res.body)
      return res.body.users
    })
}