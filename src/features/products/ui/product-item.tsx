import clsx from 'clsx'
import AddIcon from '@/shared/assets/add.svg?react'
import { Product } from '@/shared/types/product'
import { addProduct } from '@/store/basket'
import { useDispatch } from 'react-redux'
import { ButtonIcon } from '@/shared/ui/button-icon'

export function ProductItem({ product }: { product: Product }) {
  const dispatch = useDispatch()

  return (
    <li className="bg-slate-200 rounded-xl p-4 flex flex-col justify-between">
      <div className={clsx('flex items-center gap-6', !product.img && 'justify-end')}>
        {product.img && <img className="w-[100px]" src={product.img} alt={product.name} />}
        <div className="flex flex-col items-end">
          <h3 className="title">{product.name}</h3>
          <span className="text-sm text-gray-500">{product.category}</span>
          <span className="block mt-2">
            В наличии: <b>{product.quantity}</b>
          </span>
          <span>
            Цена: <b>{product.unitPrice}$</b>
          </span>
        </div>
      </div>
      <div className="flex justify-end mt-3">
        <ButtonIcon onClick={() => dispatch(addProduct(product))}>
          <AddIcon />
        </ButtonIcon>
      </div>
    </li>
  )
}
