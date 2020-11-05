import makeProductDb from './productDb'
import { makeDb } from '../../database'

const productDb = makeProductDb({ makeDb })
export default productDb
