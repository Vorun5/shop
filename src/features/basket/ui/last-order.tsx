import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { ProductItem } from './product-item'

export function LastOrder() {
  const lastOrder = useSelector((state: RootState) => state.basket.lastOrder)

  if (!lastOrder) return null

  return (
    <>
      <h3 className="title my-4">Последний заказ</h3>
      <ol>
        {lastOrder.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ol>
    </>
  )
}
