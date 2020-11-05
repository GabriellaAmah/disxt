import buildMakeUser from './userFactory'
import { isValidPassword } from '../../utils/validations'
import Id from '../../Id'

const makeUser = buildMakeUser({ isValidPassword, Id })

export default makeUser
