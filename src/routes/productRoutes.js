import expressCallback from '../express'
import {
  patchProduct,
  postProduct,
  getProducts,
  deleteProduct
} from '../products/controllers'
import { roleCheck, decodeToken } from '../middleware/auth'

export const path = '/api/v1/products'
export function config(router) {
  router
    .post('/', expressCallback(decodeToken(roleCheck(postProduct))))
    .get('/', expressCallback(decodeToken(getProducts)))
    .get('/:id', expressCallback(decodeToken(getProducts)))
    .patch('/:id', expressCallback(decodeToken(roleCheck(patchProduct))))
    .delete('/:id', expressCallback(decodeToken(roleCheck(deleteProduct))))
  return router
}
