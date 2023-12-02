import { useState } from 'react'
import { AddProductButton } from './add-product-button'
import { Popup } from '@/shared/ui/popup'
import { AddProductForm } from './add-product-form'

export function AddProduct() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AddProductButton onClick={() => setIsOpen(true)} />
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AddProductForm />
      </Popup>
    </>
  )
}
