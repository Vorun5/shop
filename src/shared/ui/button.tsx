import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        'bg-blue-400 text-slate-800 rounded py-2 px-3 font-medium text-lg hover:ring-4 hover:ring-blue-200 duration-150',
        props.className
      )}
    >
      {children}
    </button>
  )
}
