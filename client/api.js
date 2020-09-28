import request from 'superagent'

const rootUrl = '/api/v1/donart'

export function getArt() {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}
export function editProfile(id, updatedInfo) {
  return request
    .post(rootUrl + '/editProfile/' + id)
    .send(updatedInfo)
    .then((res) => {
      return res.body
    })
}
export function removeArtwork(id) {
  return request
    .patch(rootUrl + '/removeArtwork')
    .send(id)
    .then((res) => {
      console.log('REMOVE API')
      return res.body
    })
}
export function getOneArt(artId) {
  return request.get(rootUrl + '/Artwork/' + artId).then((res) => {
    return res.body
  })
}

export function getUsers() {
  return request.get(`${rootUrl}/users`).then((res) => {
    console.log('USERS', res)
    return res.body.users
  })
}
export function getCharities() {
  return request.get(`${rootUrl}/Charities`).then((res) => {
    console.log(':ASDASDASDASD', res)
    return res.body
  })
}
export function getCharity(charityId) {
  return request.get(rootUrl + '/CharityBio/' + charityId).then((res) => {
    console.log('API result get artist: ', res.body)
    return res.body
  })
}
export function saveArtwork(artwork) {
  return request
    .post(`${rootUrl}/new-artwork`)
    .send(artwork)
    .then((response) => {
      return response.body
    })
}

export function getArtist(artistID) {
  return request.get(rootUrl + '/user/' + artistID).then((res) => {
    console.log('API result get artist: ', res.body)
    return res.body
  })
}

export function getUser(userId) {
  return request.get(`${rootUrl}/profile/${userId}`).then((res) => {
    // console.log('API result get artist: ', res.body)
    return res.body
  })
}
