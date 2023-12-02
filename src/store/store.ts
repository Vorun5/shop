import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './products'
import { basketReducer } from './basket'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
