import makeUser from '../factory'
import { UniqueConstraintError } from '../../utils/errors'

const makeAddUser = ({ usersDb }) => {
  return async function addUser(userInfo) {
    const user = makeUser(userInfo)
    const exists = await usersDb.findByUsername({
      username: user.getUsername()
    })
    if (exists) {
      throw new UniqueConstraintError('Username')
    }
    return usersDb.insert({
      username: user.getUsername(),
      password: user.getPassword(),
      name: user.getName(),
      lastName: user.getLastName(),
      age: user.getAge(),
      role: user.getRole()
    })
  }
}

export default makeAddUser
