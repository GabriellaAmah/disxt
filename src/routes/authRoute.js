import expressCallback from '../express'
import { postLogin, getUser } from '../auth/controllers'
import { decodeToken } from '../middleware/auth'

export const path = '/api/v1/auth'
export function config(router) {
  router
    .post('/', expressCallback(postLogin))
    .get('/', expressCallback(decodeToken(getUser)))
  return router
}
