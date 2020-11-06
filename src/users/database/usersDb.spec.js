import makeUsersDb from './usersDb'
import makeDb from '../../../__test__/db'
import makeFakeUser from '../../../__test__/seed/user'
import 'regenerator-runtime'
import { hashPassword, createToken } from '../../utils/validations'

let usersDb
beforeEach(() => {
  usersDb = makeUsersDb({ makeDb, hashPassword, createToken })
})
describe('Users Database', () => {
  it('inserts a user into the db', async () => {
    const user = makeFakeUser()
    const inserted = await usersDb.insert(user)
    expect(inserted).toBeDefined()
    expect(inserted).toHaveProperty('token')
  })

  it('finds a user by username', async () => {
    const user = makeFakeUser()
    const inserted = await usersDb.insert(user)
    const found = await usersDb.findByUsername({ username: inserted.username })
    expect(found).toBeDefined()
  })

  it('finds by id', async () => {
    const user = makeFakeUser()
    const inserted = await usersDb.insert(user)
    const found = await usersDb.findById({ id: inserted.id })
    expect(found).toBeDefined()
  })
})
