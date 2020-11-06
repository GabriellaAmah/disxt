import { InvalidPropertyError } from '../../utils/errors'
import requiredParam from '../../utils/requiredParam'

const buildMakeProduct = ({ Id }) => {
  return function makeUser({
    name = requiredParam('Product name'),
    description = requiredParam('Description'),
    createdBy = Id.makeId(),
    price = requiredParam('Price')
  } = {}) {
    if (typeof price !== 'number') {
      throw new InvalidPropertyError('Price must be a valid number.')
    }
    return Object.freeze({
      getName: () => name,
      getDesc: () => description,
      getCreatedBy: () => createdBy,
      getPrice: () => price
    })
  }
}

export default buildMakeProduct
