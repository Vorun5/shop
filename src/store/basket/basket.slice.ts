import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product } from '@/shared/types/product'
import { sortProducts } from '@/shared/lib/sort-products'

export type BasketState = {
  basket: Product[]
  lastOrder: Product[] | null
}

const initialState: BasketState = {
  basket: [],
  lastOrder: null,
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.basket.find((product) => product.id === action.payload.id)

      if (existingProduct) {
        if (existingProduct.quantity < action.payload.quantity) {
          existingProduct.quantity += 1
        }
      } else {
        state.basket = sortProducts([...state.basket, { ...action.payload, quantity: 1 }])
      }
    },
    removeProduct: (state, action: PayloadAction<Pick<Product, 'id' | 'quantity'>>) => {
      const { id, quantity } = action.payload
      const existingProduct = state.basket.find((product) => product.id === id)

      if (existingProduct) {
        if (existingProduct.quantity <= quantity) {
          state.basket = state.basket.filter((product) => product.id !== id)
        } else {
          existingProduct.quantity -= quantity
        }
      }
    },
    makePurchase: (state) => {
      state.lastOrder = state.basket
      state.basket = []
    },
  },
})

export const basketReducer = basketSlice.reducer
