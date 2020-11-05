import makePostProduct from './post.product'
import makePatchProduct from './patch.product'
import makeGetProduct from './get.product'
import makeDeleteProduct from './delete.product'
import {
  addProduct,
  listProducts,
  removeProduct,
  editProduct
} from '../use-cases'

const postProduct = makePostProduct({ addProduct })
const getProducts = makeGetProduct({ listProducts })
const deleteProduct = makeDeleteProduct({ removeProduct })
const patchProduct = makePatchProduct({ editProduct })

export { postProduct, getProducts, deleteProduct, patchProduct }
