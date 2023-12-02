import { ProductCategory } from "./product-category"

export type ProductFilters = {
  query: string
  producatCategory: ProductCategory | null
}
