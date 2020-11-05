import makePostUser from './post.user'
import addUser from '../use-cases'

const postUser = makePostUser({ addUser })
export default postUser
