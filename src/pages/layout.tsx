import { Header } from '@/widgets/header'
import { ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-12">
      <Header />
      <main className="max-w-3xl mx-auto py-4 px-2">{children}</main>
    </div>
  )
}
