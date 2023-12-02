import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product, mockProducts } from '@/shared/types/product'
import { ProductFilters } from '@/shared/types/product-filters'
import { filterProducts } from './utils'
import { equalString } from '@/shared/lib/equal-string'

export type ProductState = {
  products: Product[]
  filters: ProductFilters
}

const initialState: ProductState = {
  products: filterProducts(mockProducts, {
    query: '',
    producatCategory: null,
  }),
  filters: {
    query: '',
    producatCategory: null,
  },
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<Product, 'id'>>) => {
      if (!state.products.some((product) => equalString(product.name, action.payload.name))) {
        state.products.push({ id: Date.now().toString(), ...action.payload })
      }
    },
    filterProducts: (state, action: PayloadAction<ProductFilters>) => {
      state.products = filterProducts(state.products, action.payload)
      state.filters = action.payload
    },
    removeProducts: (state, action: PayloadAction<Pick<Product, 'id' | 'quantity'>[]>) => {
      const newProducts: Product[] = []

      state.products.forEach((product) => {
        const productToRemoveInfo = action.payload.find((p) => p.id === product.id)
        if (productToRemoveInfo) {
          if (productToRemoveInfo.quantity < product.quantity) {
            newProducts.push({
              ...product,
              quantity: product.quantity - productToRemoveInfo.quantity,
            })
          }
        } else {
          newProducts.push(product)
        }
      })
      console.log(newProducts)
      state.products = filterProducts(newProducts, state.filters)
    },
  },
})

export const productsReducer = productsSlice.reducer
