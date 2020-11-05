import 'regenerator-runtime/runtime'
import makeListProduct from './list.products'
import makeFakeProduct from '../../../__test__/seed/product'
import makeDb from '../../../__test__/db'
import makeProductDb from '../database/productDb'

describe('Edit product', () => {
  let productDb
  beforeAll(() => {
    productDb = makeProductDb({ makeDb })
  })

  it('must include an id', async () => {
    const listProducts = makeListProduct({ productDb })
    const products = await Promise.all(
      [
        makeFakeProduct(),
        makeFakeProduct(),
        makeFakeProduct(),
        makeFakeProduct(),
        makeFakeProduct()
      ].map(productDb.insert)
    )
    expect(products).toHaveLength(5)
  })

  it('finds by id', async () => {
    const listProducts = makeListProduct({ productDb })
    const product = makeFakeProduct()
    await productDb.insert(product)
    const edited = await listProducts({ id: product._id })
    expect(edited).toBeDefined()
  })
})
