import { InvalidPropertyError } from '../../utils/errors'
import requiredParam from '../../utils/requiredParam'

const buildMakeUser = ({ isValidPassword, Id }) => {
  return function makeUser({
    username = requiredParam('Username'),
    password = requiredParam('Password'),
    name = requiredParam('Name'),
    lastName = requiredParam('Last name'),
    age = requiredParam('Age'),
    role = requiredParam('Role'),
    _id = Id.makeId()
  } = {}) {
    if (!isValidPassword(password)) {
      throw new InvalidPropertyError(
        'Password must be at least 8 characters long and must contain at least one Uppercase character, one special sign and a number.'
      )
    }
    return Object.freeze({
      getUsername: () => username,
      getPassword: () => password,
      getName: () => name,
      getLastName: () => lastName,
      getAge: () => age,
      getRole: () => role,
      getId: () => _id
    })
  }
}

export default buildMakeUser
