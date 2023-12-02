import { productsSlice } from './products.slice'

export { productsSlice, productsReducer } from './products.slice'
export type { ProductState } from './products.slice'
export const { filterProducts, addProduct, removeProducts } = productsSlice.actions
