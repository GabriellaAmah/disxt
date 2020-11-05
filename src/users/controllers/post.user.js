import { apiResponse } from '../../utils/httpResponse'
import wrapAsync from '../../utils/wrapAsync'

const makePostUser = ({ addUser }) => {
  return wrapAsync(async (httpRequest) => {
    let { ...userInfo } = httpRequest.body
    const user = await addUser({ ...userInfo })

    return apiResponse({
      status: true,
      statusCode: 201,
      data: [user],
      message: 'User created'
    })
  })
}

export default makePostUser
