import { Basket } from '@/features/basket/ui/basket'

export function Header() {
  return (
    <header className="bg-slate-200 p-2">
      <div className="max-w-3xl mx-auto flex justify-between">
        <h1 className="text-3xl text-blue-500 font-medium">EasyShop</h1>
        <Basket />
      </div>
    </header>
  )
}
