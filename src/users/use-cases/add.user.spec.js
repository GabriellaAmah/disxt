import 'regenerator-runtime/runtime'
import makeAddUser from './add.user'
import makeFakeUser from '../../../__test__/seed/user'
import makeDb from '../../../__test__/db'
import makeUsersDb from '../database/usersDb'
import { hashPassword, createToken } from '../../utils/validations'

describe('Add user', () => {
  let usersDb
  beforeAll(() => {
    usersDb = makeUsersDb({ makeDb, hashPassword, createToken })
  })

  it('inserts a user into the database', async () => {
    const newUser = await makeFakeUser()
    const addUser = makeAddUser({ usersDb })
    const inserted = await addUser(newUser)
    expect(inserted).toHaveProperty('token')
  })

  it('role should be defined', async () => {
    const user = await makeFakeUser({ role: undefined })
    const addUser = makeAddUser({ usersDb })
    expect(addUser(user)).rejects.toThrow('Role cannot be null or undefined')
  })
})
