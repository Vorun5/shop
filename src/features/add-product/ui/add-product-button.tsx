import AddIcon from '@/shared/assets/add.svg?react'
import { ButtonIcon } from '@/shared/ui/button-icon'

export function AddProductButton({ onClick }: { onClick: () => void }) {
  return (
    <ButtonIcon onClick={onClick}>
      <AddIcon />
    </ButtonIcon>
  )
}
