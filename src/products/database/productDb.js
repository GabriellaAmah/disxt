const makeProductDb = ({ makeDb }) => {
  async function insert({ ...details }) {
    const db = await makeDb()
    const product = await db.collection('products').insertOne({ ...details })
    const { _id: id, role, ...insertedInfo } = product.ops[0]
    return { id, ...insertedInfo }
  }

  async function findById({ productId }) {
    const db = await makeDb()
    const result = await db
      .collection('products')
      .findOne({ _id: db.makeId(productId) })

    if (!result) {
      return null
    }
    const { _id: id, ...foundInfo } = result
    return { id, ...foundInfo }
  }

  async function findAll() {
    const db = await makeDb()
    const found = await db.collection('products').find()
    return (await found.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }

  async function update({ id: _id, ...changes }) {
    const db = await makeDb()
    const result = await db
      .collection('products')
      .updateOne({ _id: db.makeId(_id) }, { $set: { ...changes } })

    return result.modifiedCount > 0 ? { id: _id, ...changes } : null
  }

  async function remove({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection('products').deleteOne({ _id })
    return result.deletedCount
  }

  return Object.freeze({
    insert,
    findById,
    findAll,
    update,
    remove
  })
}

export default makeProductDb
