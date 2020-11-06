import makeProduct from '../factory'

const makeAddProduct = ({ productDb }) => {
  return async function addUser({ userId, ...userInfo }) {
    const product = makeProduct(userInfo)

    return productDb.insert({
      name: product.getName(),
      description: product.getDesc(),
      price: product.getPrice(),
      createdBy: userId
    })
  }
}

export default makeAddProduct
