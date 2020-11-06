import 'regenerator-runtime/runtime'
import makeListProduct from './list.products'
import makeFakeProduct from '../../../__test__/seed/product'
import makeDb from '../../../__test__/db'
import makeProductDb from '../database/productDb'
import { async } from 'regenerator-runtime'

describe('List products', () => {
  let productDb
  beforeAll(() => {
    productDb = makeProductDb({ makeDb })
  })

  it('finds all products', async () => {
    const listProducts = makeListProduct({ productDb })
    await Promise.all(
      [
        makeFakeProduct(),
        makeFakeProduct(),
        makeFakeProduct(),
        makeFakeProduct(),
        makeFakeProduct()
      ].map(productDb.insert)
    )
    const found = await listProducts({ productId: undefined, role: 'admin' })
    expect(found).toHaveLength(5)
  })

  it('finds by id', async () => {
    const listProducts = makeListProduct({ productDb })
    const product = makeFakeProduct()
    const inserted = await productDb.insert(product)
    const found = await listProducts({ productId: inserted.id, role: 'admin' })
    expect(found).toBeDefined()
  })

  it('includes createdBy id when role is admin', async () => {
    const listProducts = makeListProduct({ productDb })
    const product = makeFakeProduct()
    const inserted = await productDb.insert(product)
    const found = await listProducts({ productId: inserted.id, role: 'admin' })
    expect(found).toHaveProperty('createdBy')
  })

  it('does not include createdBy id when role is client', async () => {
    const listProducts = makeListProduct({ productDb })
    const product = makeFakeProduct()
    const inserted = await productDb.insert(product)
    const found = await listProducts({ productId: inserted.id, role: 'client' })
    expect(found).not.toHaveProperty('createdBy')
  })
})
