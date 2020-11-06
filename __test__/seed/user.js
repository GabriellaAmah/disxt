import faker from 'faker'
import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongodb'
require('dotenv').config()

const Id = Object.freeze({
  makeId: ObjectId
})

export default function makeFakeUser(override) {
  const user = {
    username: faker.name.firstName(),
    password: 'SomeRandom1234~!',
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: 23,
    role: 'admin',
    _id: Id.makeId()
  }
  // const { _id, role } = user
  // const token = jwt.sign({ _id, role }, process.env.JWT_SECRET, {
  //   expiresIn: '2d'
  // })

  return {
    ...user,
    ...override
    // token
  }
}
