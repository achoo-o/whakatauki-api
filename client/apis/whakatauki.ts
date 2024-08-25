import request from 'superagent'

const rootUrl = '/api/v1'

export function getWhakatauki(): Promise<string[]> {
  return request.get(rootUrl + '/whakatauki').then((res) => {
    return res.body
  })
}
