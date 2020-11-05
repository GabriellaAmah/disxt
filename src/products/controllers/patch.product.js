import { apiResponse } from '../../utils/httpResponse'
import wrapAsync from '../../utils/wrapAsync'

const makePatchProduct = ({ editProduct }) => {
  return wrapAsync(async (httpRequest) => {
    let { ...productInfo } = httpRequest.body
    const productId = httpRequest.pathParams.id
    const product = await editProduct({ productId, ...productInfo })

    return apiResponse({
      status: true,
      statusCode: 200,
      data: [product],
      message: 'Product updated'
    })
  })
}

export default makePatchProduct
