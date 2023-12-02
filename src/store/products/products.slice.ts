import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product, mockProducts } from '@/shared/types/product'
import { ProductFilters } from '@/shared/types/product-filters'
import { equalString } from '@/shared/lib/equal-string'
import { sortProducts } from '@/shared/lib/sort-products'

export type ProductState = {
  products: Product[]
  filters: ProductFilters
}

const initialState: ProductState = {
  products: sortProducts(mockProducts),
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
    changeFilters: (state, action: PayloadAction<ProductFilters>) => {
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
      state.products = newProducts
    },
  },
})

export const productsReducer = productsSlice.reducer
