import makeAddUser from './add.user'
import usersDb from '../database'

const addUser = makeAddUser({ usersDb })

export default addUser
