import clsx from 'clsx';
import { Product } from '@/shared/types/product';
import { BaseUIProps } from '@/shared/ui/props';
import { ReactNode } from 'react';

export function ProductItem({
  product,
  actions,
  className,
  style,
}: { product: Product; actions?: ReactNode } & BaseUIProps) {
  return (
    <li className={clsx('bg-slate-300 rounded p-3 mb-2 ', className)} style={style}>
      <div className="flex flex-col items-end sm:justify-between sm:flex-row sm:items-start sm:gap-6">
        <div className="flex items-start gap-4">
          {product.img && (
            <img className="min-w-[80px] w-[80px]" src={product.img} alt={product.name} />
          )}
          <div className="flex flex-col items-end py-1">
            <span className="text-lg leading-2">{product.name}</span>
            <span className="text-xs text-gray-500">{product.category}</span>
          </div>
        </div>
        <div className="flex items-end flex-col pt-2">
          <span className="text-sm whitespace-nowrap">
            Количество: <b>{product.quantity}</b>
          </span>
          <span className="text-sm whitespace-nowrap">
            Цена: {product.quantity > 1 ? `${product.unitPrice}$ x ${product.quantity} = ` : ''}{' '}
            <b>{(product.quantity * product.unitPrice).toFixed(2)}$</b>
          </span>
        </div>
      </div>
      {actions}
    </li>
  )
}
