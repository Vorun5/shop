import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonIconProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function ButtonIcon({ children, ...props }: ButtonIconProps) {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        'rounded-full bg-blue-500 text-white h-10 w-10 p-2 flex items-center justify-center hover:ring-4 duration-150',
        props.className
      )}
    >
      {children}
    </button>
  )
}
