import { MongoClient } from 'mongodb'

let connection, db

export default async function makeDb() {
  connection =
    connection ||
    (await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }))
  db = db || (await connection.db(global.__MONGO_DB_NAME__))
  return db
}

export async function closeDb() {
  await connection.close()
  await db.close()
}

export async function clearDb() {
  await db.collection('users').deleteMany()
  return true
}

export { connection, db }
