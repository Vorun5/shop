import { ReactNode, SelectHTMLAttributes, useId } from 'react';

export function SelectField({
  label,
  children,
  ...props
}: { label?: string; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  const id = useId()

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block mb-1 font-medium text-gray-700 ">
          {label}
        </label>
      )}
      <select
        id={id}
        className="block h-12 text-lg w-full py-2 px-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      >
        {children}
      </select>
    </div>
  )
}
