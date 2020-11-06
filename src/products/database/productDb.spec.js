import makeProductDb from './productDb'
import makeDb from '../../../__test__/db'
import makeFakeProduct from '../../../__test__/seed/product'
import { async } from 'regenerator-runtime'

let productDb
beforeEach(() => {
  productDb = makeProductDb({ makeDb })
})
describe('Product', () => {
  it('inserts a product into the database', async () => {
    const product = makeFakeProduct()
    const inserted = await productDb.insert(product)
    expect(inserted).toBeDefined()
  })

  it('finds by product id', async () => {
    const product = makeFakeProduct()
    const inserted = await productDb.insert(product)
    const found = await productDb.findById({ productId: inserted.id })
    expect(found).toEqual(inserted)
  })

  it('lists all products', async () => {
    const inserted = await Promise.all(
      [
        makeFakeProduct(),
        makeFakeProduct(),
        makeFakeProduct(),
        makeFakeProduct(),
        makeFakeProduct(),
        makeFakeProduct()
      ].map(productDb.insert)
    )
    const found = await productDb.findAll()
    return inserted.forEach((insert) => expect(found).toContainEqual(insert))
  })

  it('updates a product', async () => {
    const product = makeFakeProduct()
    const inserted = await productDb.insert(product)
    const edit = await productDb.update({ id: inserted.id, name: 'test-name' })
    expect(edit.name).toBe('test-name')
  })

  it('removes a product', async () => {
    const product = makeFakeProduct()
    const inserted = await productDb.insert(product)
    await productDb.remove({ id: inserted.id })
    const found = await productDb.findById({ productId: inserted.id })
    expect(found).toBeNull()
  })
})
