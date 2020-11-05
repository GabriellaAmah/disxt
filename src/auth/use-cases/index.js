import makeLoginUser from './login'
import makeGetUser from './get.user'
import { sendTokenResponse, validatePassword } from '../../utils/validations'
import usersDb from '../../users/database'

const loginUser = makeLoginUser({
  usersDb,
  sendTokenResponse,
  validatePassword
})
const listUser = makeGetUser({ usersDb })

export { loginUser, listUser }
