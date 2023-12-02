import { Button } from '@/shared/ui/button'
import { RootState } from '@/store'
import { makePurchase } from '@/store/basket'
import { useDispatch, useSelector } from 'react-redux'
import { ProductItem } from './product-item'
import { useMemo } from 'react'
import { Product } from '@/shared/types/product'

const calculateTotal = (basket: Product[]) => {
  return basket.reduce((sum, product) => sum + product.quantity * product.unitPrice, 0).toFixed(2)
}

export function ProductList() {
  const basket = useSelector((state: RootState) => state.basket.basket)
  const dispatch = useDispatch()

  const total = useMemo(() => calculateTotal(basket), [basket])

  return (
    <>
      <h3 className="title my-4">Корзина</h3>
      {basket.length === 0 ? (
        <div>
          <img
            src="https://cdn.betterttv.net/emote/602b26e7d049042e32dc45a2/3x.webp"
            alt="Sadge"
            className="mx-auto w-20"
          />
          <span className="mt-2 block text-center text-lg">Ваша корзина пуста</span>
        </div>
      ) : (
        <>
          <ol>
            {basket.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ol>
          <Button
            className="mt-2 w-full"
            onClick={() => {
              dispatch(makePurchase())
            }}
          >
            Купить всё за {total}$
          </Button>
        </>
      )}
    </>
  )
}
