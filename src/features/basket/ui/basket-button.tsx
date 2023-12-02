import BasketIcon from '@/shared/assets/basket.svg?react'
import { ButtonIcon } from '@/shared/ui/button-icon'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

export function BasketButton({ onClick }: { onClick: () => void }) {
  const quantity = useSelector((state: RootState) =>
    state.basket.basket.reduce((sum, product) => sum + product.quantity, 0)
  )

  return (
    <ButtonIcon onClick={onClick} className="relative">
      {quantity > 0 && (
        <div className="bg-red-500 absolute rounded-full min-w-[1.5rem] px-1 h-6 flex items-center justify-center -right-1 -top-1">
          <span>{quantity}</span>
        </div>
      )}
      <BasketIcon />
    </ButtonIcon>
  )
}
