import { basketSlice } from './basket.slice'

export { basketSlice, basketReducer } from './basket.slice'
export type { BasketState } from './basket.slice'

export const { addProduct, removeProduct, makePurchase } = basketSlice.actions
