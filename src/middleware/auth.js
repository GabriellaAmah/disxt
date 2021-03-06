import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { InvalidPropertyError, UnauthorizedError } from '../utils/errors'
import wrapAsync from '../utils/wrapAsync'

dotenv.config()

export const decodeToken = (controller) => {
  return wrapAsync(async (httpRequest) => {
    const token = httpRequest.headers['x-auth-token']
    if (!token) {
      throw new UnauthorizedError('No token, authorization denied.')
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    httpRequest.user = decoded
    return controller(httpRequest)
  })
}

export function roleCheck(controller) {
  return wrapAsync(async (httpRequest) => {
    const { role } = httpRequest.user
    if (role !== 'admin') {
      throw new UnauthorizedError(
        'You do not have the authorization to perform this action'
      )
    }
    return controller(httpRequest)
  })
}
