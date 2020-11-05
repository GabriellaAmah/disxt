import { apiResponse } from '../../utils/httpResponse'
import wrapAsync from '../../utils/wrapAsync'

const makeGetProduct = ({ listProducts }) => {
  return wrapAsync(async (httpRequest) => {
    const { ...productInfo } = httpRequest.body
    const productId = httpRequest.pathParams.id
    const { role } = httpRequest.user
    const user = await listProducts({ role, productId, ...productInfo })

    return apiResponse({
      status: true,
      statusCode: 200,
      data: [user],
      message: 'Products'
    })
  })
}

export default makeGetProduct
