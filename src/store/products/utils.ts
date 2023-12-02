import { sortProducts } from '@/shared/lib/sort-products'
import { Product } from '@/shared/types/product'
import { ProductFilters } from '@/shared/types/product-filters'

export function filterProducts(products: Product[], filters: ProductFilters): Product[] {
  const { query, producatCategory } = filters

  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = producatCategory ? product.category === producatCategory : true

    return matchesQuery && matchesCategory
  })

  return sortProducts(filteredProducts)
}
