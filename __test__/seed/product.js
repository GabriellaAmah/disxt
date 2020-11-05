import faker from 'faker'
import { ObjectId } from 'mongodb'
import makeFakeUser from './user'

const Id = Object.freeze({
  makeId: ObjectId
})

const user = makeFakeUser()

export default function makeFakeProduct(override) {
  const product = {
    name: faker.name.firstName(),
    description: faker.lorem.sentence(),
    price: faker.finance.amount(),
    createdBy: user._id,
    _id: Id.makeId()
  }

  return {
    ...product,
    ...override
  }
}
