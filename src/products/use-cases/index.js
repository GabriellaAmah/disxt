import makeAddProduct from './add.product'
import makeEditProduct from './edit.products'
import makeRemoveProduct from './remove.products'
import productDb from '../database'
import makeListProducts from './list.products'

const addProduct = makeAddProduct({ productDb })
const editProduct = makeEditProduct({ productDb })
const removeProduct = makeRemoveProduct({ productDb })
const listProducts = makeListProducts({ productDb })

export { addProduct, editProduct, removeProduct, listProducts }
