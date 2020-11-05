import makePostLogin from './post.login'
import makeGetUser from './get.user'
import { listUser, loginUser } from '../use-cases'

const postLogin = makePostLogin({ loginUser })
const getUser = makeGetUser({ listUser })

export { postLogin, getUser }
