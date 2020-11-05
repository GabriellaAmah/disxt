import { apiResponse } from '../../utils/httpResponse'
import wrapAsync from '../../utils/wrapAsync'

const makeGetUser = ({ listUser }) => {
  return wrapAsync(async (httpRequest) => {
    const { id } = httpRequest.user

    const user = await listUser({ id })
    return apiResponse({
      status: 'OK',
      statusCode: 200,
      message: 'Authenticated user',
      data: [user]
    })
  })
}

export default makeGetUser
