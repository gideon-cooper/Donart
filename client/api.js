import request from 'superagent'

const rootUrl = 'api/v1'
export function getArt() {
  return request.get(rootUrl).then((res) => {
    return res.body.artworks
  })
}

export function getOneArt(artId) {
  return request.get(rootUrl + '/art/' + artId).then((res) => {
    return res.body
  })
}
