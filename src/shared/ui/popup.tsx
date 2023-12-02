import CloseIcon from '@/shared/assets/close.svg?react'
import { ReactNode } from 'react'

export function Popup({
  onClose,
  isOpen,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}) {
  if (!isOpen) return null

  return (
    <div className="fixed flex items-center justify-center z-[100] inset-0 bg-black bg-opacity-50 h-[100dvh] w-[100dwh]">
      <div className="absolute z-[101] w-full h-full" onClick={onClose}></div>
      <div className="relative z-[102] rounded-xl bg-slate-100 p-4 min-w-[280px] min-h-[100px] popup-restrictions overflow-y-auto">
        <button className="absolute right-2 top-2" type="button" onClick={onClose}>
          <CloseIcon className="w-8" />
        </button>
        {children}
      </div>
    </div>
  )
}
