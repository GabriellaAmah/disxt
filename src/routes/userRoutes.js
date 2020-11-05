import expressCallback from '../express'
import postUser from '../users/controllers'

export const path = '/api/v1/users'
export function config(router) {
  router.post('/', expressCallback(postUser))
  return router
}
