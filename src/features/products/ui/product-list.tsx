import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { filterProducts } from '@/shared/lib/filter-products'
import { ProductItem } from './product-item'

export function ProductList() {
  const products = useSelector((state: RootState) => state.products.products)
  const filters = useSelector((state: RootState) => state.products.filters)

  const filterdProducts = filterProducts(products, filters)

  return (
    <>
      <h2 className="title mb-4">Список товаров</h2>
      {filterdProducts.length === 0 ? (
        <div className="flex flex-col items-center">
          <img
            className="w-28"
            src="https://cdn.betterttv.net/emote/57850b9df1bf2c1003a88644/3x.webp"
            alt="FeelsRainMan"
          />
          <span className="block mt-2 text-lg">Список товар пуст</span>
        </div>
      ) : (
        <ol className="grid sm:grid-cols-2 gap-3">
          {filterdProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ol>
      )}
    </>
  )
}
