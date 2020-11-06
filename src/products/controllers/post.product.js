import { apiResponse } from '../../utils/httpResponse'
import wrapAsync from '../../utils/wrapAsync'

const makePostProduct = ({ addProduct }) => {
  return wrapAsync(async (httpRequest) => {
    let { ...productInfo } = httpRequest.body
    const userId = httpRequest.user.id
    const user = await addProduct({ userId, ...productInfo })

    return apiResponse({
      status: true,
      statusCode: 201,
      data: [user],
      message: 'Product created'
    })
  })
}

export default makePostProduct
