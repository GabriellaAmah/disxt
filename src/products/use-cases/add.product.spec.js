import 'regenerator-runtime/runtime'
import makeAddProduct from './add.product'
import makeFakeProduct from '../../../__test__/seed/product'
import makeFakeUser from '../../../__test__/seed/user'
import makeDb from '../../../__test__/db'
import makeProductDb from '../database/productDb'

describe('Add product', () => {
  let productDb
  beforeAll(() => {
    productDb = makeProductDb({ makeDb })
  })

  it('inserts a product into the database', async () => {
    const product = await makeFakeProduct()
    const user = await makeFakeUser()
    const addProduct = makeAddProduct({ productDb })
    const inserted = await addProduct({ userId: user._id, ...product })
    expect(inserted).toBeDefined()
  })
})
