import { InvalidPropertyError } from '../../utils/errors'

const makeListProducts = ({ productDb }) => {
  return async function listProducts({ productId, role }) {
    if (productId) {
      const exists = await productDb.findById({ productId })
      if (!exists) {
        throw new InvalidPropertyError('Product does not exist.')
      }
      const foundProduct = await productDb.findById({ productId })
      if (role !== 'admin') {
        delete foundProduct.createdBy
      }
      return foundProduct
    }
    const found = await productDb.findAll()
    if (role !== 'admin') {
      return found.filter((product) => delete product.createdBy)
    }
    return found
  }
}

export default makeListProducts
