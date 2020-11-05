import 'regenerator-runtime/runtime'
import makeEditProduct from './edit.products'
import makeFakeProduct from '../../../__test__/seed/product'
import makeDb from '../../../__test__/db'
import makeProductDb from '../database/productDb'

describe('Edit product', () => {
  let productDb
  beforeAll(() => {
    productDb = makeProductDb({ makeDb })
  })

  it('must include an id', async () => {
    const editProduct = makeEditProduct({ productDb })
    const product = makeFakeProduct({ id: undefined })
    expect(editProduct(product)).rejects.toThrow(
      'Product id cannot be null or undefined'
    )
  })

  it('modifies a field', async () => {
    const editProduct = makeEditProduct({ productDb })
    const product = makeFakeProduct()
    await productDb.insert(product)
    const edited = await editProduct({
      id: product.id,
      name: 'my-business-store'
    })
    expect(edited.name).toBe('my-business-store')
  })
})
