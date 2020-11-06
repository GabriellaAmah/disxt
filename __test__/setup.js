// import 'regenerator-runtime/runtime'
// const path = require('path')

// const fs = require('fs')

// const { MongoMemoryServer } = require('mongodb-memory-server')

// const globalConfigPath = path.join(__dirname, 'globalConfigMongo.json')

// const mongod =
//   global.__MONGOD__ ||
//   new MongoMemoryServer({
//     autoStart: false
//   })

// module.exports = async () => {
//   if (!mongod.runningInstance) {
//     await mongod.start()
//   }

//   const mongoConfig = {
//     mongoDBName: 'jest',
//     mongoUri: await mongod.getUri(true)
//   }

//   // Write global config to disk because all tests run in different contexts.
//   fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig))

//   // Set reference to mongod in order to close the server during teardown.
//   global.__MONGOD__ = mongod
// }

import MemoryDatabaseServer from '../src/lib/MemoryDatabase'

module.exports = async () => {
  await MemoryDatabaseServer.start()
}
