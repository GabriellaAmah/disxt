import makeDb from '../../../__test__/db'
import makeUsersDb from './usersDb'
import makeFakeUser from '../../../__test__/seed/user'

describe('Users db', () => {
  let usersDb

  beforeEach(async () => {
    usersDb = makeUsersDb({ makeDb })
  })

  it('inserts a user', async () => {
    const user = makeFakeUser()
    await usersDb.insert(user)
    return expect(user).toHaveProperty('token')
  })

  it('finds by username', async () => {
    const user = makeFakeUser()
    const insert = await usersDb.insert(user)
    const found = await usersDb.findByUsername({ username: insert.username })
    expect(found).toBeDefined()
  })
})
