import requiredParam from '../../utils/requiredParam'

const makeRemoveProduct = ({ productDb }) => {
  return async function removeProduct({
    productId = requiredParam('Product id')
  }) {
    const exists = await productDb.findById({ productId })
    if (!exists) {
      return deleteNothing()
    }
    return hardDelete(exists)

    function deleteNothing() {
      return {
        deletedCount: 0,
        message: 'Product not found, nothing to delete.'
      }
    }

    async function hardDelete(product) {
      await productDb.remove(product)
      return {
        deletedCount: 1,
        message: 'Product deleted.'
      }
    }
  }
}

export default makeRemoveProduct
