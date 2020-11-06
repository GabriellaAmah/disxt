import { InvalidPropertyError } from '../../utils/errors'
import requiredParam from '../../utils/requiredParam'

const buildMakeUser = ({ isValidPassword }) => {
  return function makeUser({
    username = requiredParam('Username'),
    password = requiredParam('Password'),
    name = requiredParam('Name'),
    lastName = requiredParam('Last name'),
    age = requiredParam('Age'),
    role = requiredParam('Role')
  } = {}) {
    const roles = Object.freeze({
      admin: 'admin',
      client: 'client'
    })
    if (!isValidPassword(password)) {
      throw new InvalidPropertyError(
        'Password must be at least 8 characters long and must contain at least one Uppercase character, one special sign and a number.'
      )
    }
    if (!(role in roles)) {
      throw new InvalidPropertyError('Role must either be admin or client.')
    }

    return Object.freeze({
      getUsername: () => username,
      getPassword: () => password,
      getName: () => name,
      getLastName: () => lastName,
      getAge: () => age,
      getRole: () => role
    })
  }
}

export default buildMakeUser
