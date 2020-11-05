import { makeHttpError } from './httpResponse'
import {
  UniqueConstraintError,
  InvalidPropertyError,
  RequiredParameterError,
  UnauthorizedError,
  DatabaseError
} from './errors'

const wrapAsync = (fn) => (req, res, ...otherParams) =>
  fn(req, res, ...otherParams).catch((error) => {
    console.log('ERROR', error)
    return makeHttpError({
      errorMessage: error.message,
      title: error.name,
      stack: error.stack,
      statusCode:
        error instanceof UniqueConstraintError
          ? 409
          : error instanceof InvalidPropertyError ||
            error instanceof RequiredParameterError
          ? 400
          : 500 || error instanceof UnauthorizedError
          ? error.statusCode
          : 401 || error instanceof DatabaseError
          ? error.statusCode
          : 400
    })
  })

export default wrapAsync
