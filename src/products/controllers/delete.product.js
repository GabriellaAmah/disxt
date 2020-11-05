import wrapAsync from '../../utils/wrapAsync'
import { apiResponse } from '../../utils/httpResponse'

const makeDeleteProduct = ({ removeProduct }) => {
  return wrapAsync(async (httpRequest) => {
    const productId = httpRequest.pathParams.id
    const deleted = await removeProduct({ productId })
    console.log({ deleted })
    return apiResponse({
      status: true,
      statusCode: 200,
      data: [deleted],
      message: 'Product deleted.'
    })
  })
}

export default makeDeleteProduct
