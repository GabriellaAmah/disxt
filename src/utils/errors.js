class RequiredParameterError extends Error {
  constructor(value) {
    super(`${value} cannot be null or undefined`)
    this.name = 'RequiredParameterError'

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequiredParameterError)
    }
  }
}

class InvalidPropertyError extends Error {
  constructor(value) {
    super(value)
    this.name = 'InvalidPropertyError'

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidPropertyError)
    }
  }
}

class UnauthorizedError extends Error {
  constructor(message, statusCode = 401) {
    super(message)
    this.name = 'UnauthorizedError'
    this.statusCode = statusCode

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UnauthorizedError)
    }
  }
}

class UniqueConstraintError extends Error {
  constructor(value) {
    super(`${value} must be unique.`)

    this.name = 'UniqueConstraintError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UniqueConstraintError)
    }
  }
}

export {
  RequiredParameterError,
  InvalidPropertyError,
  UnauthorizedError,
  UniqueConstraintError
}
