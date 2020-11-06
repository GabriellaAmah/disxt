import { InvalidPropertyError } from '../../utils/errors'
import requiredParam from '../../utils/requiredParam'
import makeProduct from '../factory'

const makeEditProduct = ({ productDb }) => {
  return async function editProduct({
    productId = requiredParam('Product id'),
    ...changes
  }) {
    const exists = await productDb.findById({ productId })
    if (!exists) {
      throw new InvalidPropertyError('Product does not exist.')
    }

    const editedProduct = makeProduct({ ...exists, ...changes })
    const updated = await productDb.update({
      id: productId,
      name: editedProduct.getName(),
      description: editedProduct.getDesc(),
      price: editedProduct.getPrice()
    })

    return { ...editedProduct, ...updated }
  }
}

export default makeEditProduct
