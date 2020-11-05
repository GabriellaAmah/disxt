import makeUsersDb from './usersDb'
import { hashPassword, createToken } from '../../utils/validations'
import { makeDb } from '../../database'

const usersDb = makeUsersDb({ makeDb, hashPassword, createToken })
export default usersDb
