import 'regenerator-runtime/runtime'
import makeAddProduct from './add.product'
import makeFakeProduct from '../../../__test__/seed/product'
import makeDb from '../../../__test__/db'
import makeProductDb from '../database/productDb'

describe('Add product', () => {
  let productDb
  beforeAll(() => {
    productDb = makeProductDb({ makeDb })
  })

  it('inserts a product into the database', async () => {
    const product = await makeFakeProduct({ _id: '5fa291068558d23a081f3be6' })
    console.log('producttt', product)
    const addProduct = makeAddProduct({ productDb })
    const inserted = await addProduct(product)
    console.log('insertedddd', inserted)
    expect(inserted).toMatchObject(product)
  })
})
