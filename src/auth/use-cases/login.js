import authFactory from '../factory'
import { InvalidPropertyError } from '../../utils/errors'

const makeLoginUser = ({ usersDb, sendTokenResponse, validatePassword }) => {
  return async function loginUser(userInfo) {
    const user = authFactory(userInfo)

    const exists = await usersDb.findByUsername({
      username: user.getUsername()
    })
    if (!exists) {
      throw new InvalidPropertyError('User does not exist.')
    }
    const password = await validatePassword(user.getPassword(), exists.password)
    if (!password) {
      throw new InvalidPropertyError('Password is incorrect.')
    }
    const payload = {
      id: exists.id,
      role: exists.role
    }

    return sendTokenResponse(payload)
  }
}

export default makeLoginUser
