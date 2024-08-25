import request from 'superagent'
import { Output } from '../../models/whakatauki'

const rootUrl = '/api/v1'

export function getWhakatauki(): Promise<Output[]> {
  return request.get(rootUrl + '/whakatauki').then((res) => {
    return res.body
  })
}
