import { apiResponse } from '../../utils/httpResponse'
import wrapAsync from '../../utils/wrapAsync'

const makePostLogin = ({ loginUser }) => {
  return wrapAsync(async (httpRequest) => {
    const { ...userInfo } = httpRequest.body

    const token = await loginUser({ ...userInfo })
    return apiResponse({
      status: true,
      statusCode: 200,
      message: 'Authenticated',
      token
    })
  })
}

export default makePostLogin
