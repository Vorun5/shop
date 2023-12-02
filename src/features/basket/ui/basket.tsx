import { useState } from 'react'
import { Popup } from '@/shared/ui/popup'
import { LastOrder } from './last-order'
import { ProductList } from './product-list'
import { BasketButton } from './basket-button'

export function Basket() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <BasketButton onClick={() => setIsOpen(true)} />
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ProductList />
        <LastOrder />
      </Popup>
    </>
  )
}
