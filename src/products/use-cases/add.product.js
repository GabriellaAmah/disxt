import { UnauthorizedError } from '../../utils/errors'
import makeProduct from '../factory'

const makeAddProduct = ({ productDb }) => {
  return async function addUser({ role, userId, ...userInfo }) {
    const product = makeProduct(userInfo)

    // if (role !== 'admin') {
    //   throw new UnauthorizedError('Only admins can create a new product.')
    // }
    return productDb.insert({
      name: product.getName(),
      description: product.getDesc(),
      price: product.getPrice(),
      createdBy: userId
    })
  }
}

export default makeAddProduct
