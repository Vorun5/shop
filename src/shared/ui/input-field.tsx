import { InputHTMLAttributes, useId } from 'react'

export function InputField({
  label,
  ...props
}: { label?: string } & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId()

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block mb-1 font-medium text-gray-700 ">
          {label}
        </label>
      )}
      <input
        type="text"
        {...props}
        id={id}
        className="block h-12 text-lg w-full py-2 px-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}
