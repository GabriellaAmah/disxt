import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const isValidPassword = (password) => {
  const validate = new RegExp(
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
  )
  return validate.test(password)
}

const hashPassword = (password) => {
  return bcrypt.hash(password, 12)
}

const validatePassword = (password1, password2) => {
  return bcrypt.compare(password1, password2)
}

const createToken = (userDetails) => {
  return jwt.sign(userDetails, process.env.JWT_SECRET, { expiresIn: '1d' })
}

const sendTokenResponse = (user) => {
  const token = createToken(user)
  return token
}

export {
  isValidPassword,
  hashPassword,
  validatePassword,
  createToken,
  sendTokenResponse
}
