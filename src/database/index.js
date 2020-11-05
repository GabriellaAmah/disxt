import { MongoClient, ObjectID, ObjectId } from 'mongodb'
require('dotenv').config()

const url = process.env.DB_URL_LOCAL
console.log({ url })

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export async function makeDb() {
  if (!client.isConnected()) {
    await client.connect()
  }
  const db = client.db('disxt')
  db.makeId = transformId
  return db
}

function transformId(id) {
  return new ObjectID(id)
}

;(async function startupDB() {
  console.log('Starting up---')
  const db = await makeDb()
  const user = await db.collection('users').createIndex({ _id: 1 })
  console.log(user)
  console.log('Done')
})()
