const makeUsersDb = ({ makeDb, hashPassword, createToken }) => {
  async function insert({ ...details }) {
    const db = await makeDb()
    if (details.password) {
      details.password = await hashPassword(details.password)
    }
    const user = await db.collection('users').insertOne({ ...details })
    const { _id: id, role, ...insertedInfo } = user.ops[0]
    const userInfo = { role, id }
    const token = await createToken(userInfo)
    return { id, token, role, ...insertedInfo }
  }

  async function findByUsername({ username }) {
    const db = await makeDb()
    const result = await db.collection('users').findOne({ username })
    if (!result) {
      return null
    }
    const { _id: id, ...foundInfo } = result
    return { id, ...foundInfo }
  }

  async function findById({ id }) {
    const db = await makeDb()
    const found = await db.collection('users').findOne({ _id: db.makeId(id) })
    return found
  }

  return Object.freeze({
    insert,
    findByUsername,
    findById
  })
}

export default makeUsersDb
