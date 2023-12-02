import { AddProduct } from '@/features/add-product'
import { Basket } from '@/features/basket/ui/basket'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-300 p-2">
      <div className="max-w-3xl mx-auto flex justify-between">
        <div className="flex gap-3">
          <img
            className="w-10"
            draggable={false}
            src="https://cdn.betterttv.net/emote/64246f35a7ede3d7bda70e06/3x.webp"
            alt="EZPoro"
          />
          <h1 className="text-3xl text-blue-500 font-medium">EasyShop</h1>
        </div>
        <div className='flex gap-3'>
          <AddProduct />
          <Basket />
        </div>
      </div>
    </header>
  )
}
