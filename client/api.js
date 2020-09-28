import request from 'superagent'

const rootUrl = '/api/v1/donart'

export function getArt () {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}
export function editProfile (id, updatedInfo) {
  return request
    .post(rootUrl + '/editProfile/' + id)
    .send(updatedInfo)
    .then((res) => {
      return res.body
    })
}

export function getOneArt (artId) {
  return request.get(rootUrl + '/Artwork/' + artId).then((res) => {
    return res.body
  })
}

export function getUsers () {
  return request.get(`${rootUrl}/users`)
    .then(res => {
      return res.body.users
    })
}

export function saveArtwork (artwork) {
  return request
    .post(`${rootUrl}/new-artwork`)
    .send(artwork)
    .then(response => {
      return response.body
    })
}

export function getArtist (artistID) {
  return request.get(rootUrl + '/user/' + artistID)
    .then((res) => {
      return res.body
    })
}

export function getUser (userId) {
  return request.get(`${rootUrl}/profile/${userId}`)
    .then((res) => {
      return res.body
    })
}