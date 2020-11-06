import { clearDb, closeDb } from './db'

beforeEach(() => {
  return clearDb()
})

afterAll(() => {
  return closeDb()
})
