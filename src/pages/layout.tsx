import { Header } from '@/widgets/header'
import { ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}