import requiredParam from '../../utils/requiredParam'

const buildAuthFactory = () => {
  return function makeUser({
    username = requiredParam('Username'),
    password = requiredParam('Password')
  } = {}) {
    return Object.freeze({
      getUsername: () => username,
      getPassword: () => password
    })
  }
}

export default buildAuthFactory
