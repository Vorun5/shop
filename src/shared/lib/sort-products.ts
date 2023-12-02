import { Product } from '../types/product'

export function sortProducts(products: Product[]) {
  return products.sort((a, b) => a.name.localeCompare(b.name))
}
