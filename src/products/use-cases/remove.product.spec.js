import 'regenerator-runtime/runtime'
import makeRemoveProduct from './remove.products'
import makeFakeProduct from '../../../__test__/seed/product'
import makeDb from '../../../__test__/db'
import makeProductDb from '../database/productDb'
import { async } from 'regenerator-runtime'

describe('Edit product', () => {
  let productDb
  beforeAll(() => {
    productDb = makeProductDb({ makeDb })
  })

  it('removes non-existent product  ', async () => {
    const removeProduct = makeRemoveProduct({ productDb })
    const product = makeFakeProduct()
    const expected = {
      deletedCount: 0,
      message: 'Product not found, nothing to delete.'
    }
    const actual = await removeProduct({ id: product.id })
    expect(actual).toEqual(expected)
  })

  it('deletes a product entirely', async () => {
    const removeProduct = makeRemoveProduct({ productDb })
    const product = makeFakeProduct()
    const inserted = await productDb.insert(product)
    const deleted = await removeProduct({ id: inserted._id })
    const expected = {
      deletedCount: 1,
      message: 'Product deleted.'
    }
    expect(deleted).toEqual(expected)
  })
})
