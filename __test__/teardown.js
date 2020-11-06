// module.exports = async function ({ watch, watchAll } = {}) {
//   if (!watch && !watchAll) {
//     await global.__MONGOD__.stop()
//   }
// }

import MemoryDatabaseServer from '../src/lib/MemoryDatabase'

module.exports = async () => {
  await MemoryDatabaseServer.stop()
}
