import 'regenerator-runtime/runtime'
import makeRemoveProduct from './remove.products'
import makeFakeProduct from '../../../__test__/seed/product'
import makeDb from '../../../__test__/db'
import makeProductDb from '../database/productDb'
import { ObjectId } from 'mongodb'

describe('Edit product', () => {
  let productDb
  beforeAll(() => {
    productDb = makeProductDb({ makeDb })
  })

  it('removes non-existent product  ', async () => {
    const removeProduct = makeRemoveProduct({ productDb })
    const expected = {
      deletedCount: 0,
      message: 'Product not found, nothing to delete.'
    }
    const actual = await removeProduct({ productId: ObjectId() })
    expect(actual).toEqual(expected)
  })

  it('deletes a product entirely', async () => {
    const removeProduct = makeRemoveProduct({ productDb })
    const product = makeFakeProduct()
    const inserted = await productDb.insert(product)
    const deleted = await removeProduct({ productId: inserted.id })
    const expected = {
      deletedCount: 1,
      message: 'Product deleted.'
    }
    expect(deleted).toEqual(expected)
  })
})
