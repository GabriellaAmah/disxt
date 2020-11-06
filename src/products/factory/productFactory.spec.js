import makeFakeProduct from '../../../__test__/seed/product'
import makeProduct from '.'

describe('Product', () => {
  it('must have a product name', async () => {
    const product = makeFakeProduct({ name: undefined })
    expect(() => makeProduct(product)).toThrow(
      'Product name cannot be null or undefined'
    )
  })

  it('must have a product description', async () => {
    const product = makeFakeProduct({ description: undefined })
    expect(() => makeProduct(product)).toThrow(
      'Description cannot be null or undefined'
    )
  })

  it('must have a product price', async () => {
    const product = makeFakeProduct({ price: undefined })
    expect(() => makeProduct(product)).toThrow(
      'Price cannot be null or undefined'
    )
  })

  it('product price must be a number', async () => {
    const product = makeFakeProduct({ price: '20' })
    expect(() => makeProduct(product)).toThrow('Price must be a valid number.')
  })
})
