import requiredParam from '../../utils/requiredParam'
import { InvalidPropertyError } from '../../utils/errors'

const makeListUser = ({ usersDb }) => {
  return async function listUser({ id = requiredParam('Id') } = {}) {
    const user = await usersDb.findById({ id })
    if (!user) {
      throw new InvalidPropertyError('User does not exist.')
    }
    return user
  }
}

export default makeListUser
