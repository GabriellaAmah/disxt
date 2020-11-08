import { MongoClient, ObjectId } from 'mongodb'

let connection, db

export default async function makeDb() {
  connection =
    connection ||
    (await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }))
  db = db || (await connection.db(global.__MONGO_DB_NAME__))
  db.makeId = function (id) {
    return ObjectId(id)
  }
  return db
}

export async function closeDb() {
  await connection.close()
}

export async function clearDb() {
  const db = await makeDb()
  await db.collection('users').deleteMany()
  await db.collection('products').deleteMany()
  return true
}

export { connection, db }
