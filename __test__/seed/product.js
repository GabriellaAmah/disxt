import faker from 'faker'
import { ObjectId } from 'mongodb'

const Id = Object.freeze({
  makeId: ObjectId
})

export default function makeFakeProduct(override) {
  const product = {
    name: faker.name.firstName(),
    description: faker.lorem.sentence(),
    price: faker.finance.amount(),
    createdBy: Id.makeId()
  }

  return {
    ...product,
    ...override
  }
}
