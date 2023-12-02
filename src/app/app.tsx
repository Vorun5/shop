import { RootState } from '@/store'
import { addProduct, makePurchase, removeProduct } from '@/store/basket'
import { removeProducts } from '@/store/products'
import { useDispatch, useSelector } from 'react-redux'

export function App() {
  const products = useSelector((state: RootState) => state.products.products)
  const basket = useSelector((state: RootState) => state.basket.basket)
  const lastOrder = useSelector((state: RootState) => state.basket.lastOrder)
  const dispatch = useDispatch()

  return (
    <div className="bg-base-100">
      <h2 className="text-3xl">Корзина ({basket.length})</h2>
      {basket.map((p) => (
        <div>
          {p.name} ({p.quantity})
          <button type="button" onClick={() => dispatch(removeProduct({ id: p.id, quantity: 1 }))}>
            [-]
          </button>
          <button
            type="button"
            onClick={() => dispatch(removeProduct({ id: p.id, quantity: p.quantity }))}
          >
            [--]
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          dispatch(
            removeProducts(
              basket.map((product) => ({
                id: product.id,
                quantity: product.quantity,
              }))
            )
          )
          dispatch(makePurchase())
        }}
      >
        Сделать заказ
      </button>
      {lastOrder && (
        <>
          <h2 className="text-3xl">Последний заказ</h2>
          {lastOrder.map((product) => (
            <div>
              {product.name} ({product.quantity})
            </div>
          ))}
        </>
      )}
      <h2 className="text-3xl">Продукты</h2>
      {products.map((p) => (
        <div>
          {p.name} ({p.quantity})
          <button type="button" onClick={() => dispatch(addProduct(p))}>
            [+]
          </button>
        </div>
      ))}
    </div>
  )
}
