import clsx from 'clsx';
import { InputHTMLAttributes, useId } from 'react';

export function InputField({
  label,
  error,
  ...props
}: { label?: string; error?: string | null } & InputHTMLAttributes<HTMLInputElement>) {
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
        className={clsx(
          'block h-12 text-lg w-full py-2 px-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500',
          error && 'border-red-300 focus:ring-red-500'
        )}
      />
      {error && <span className="block mt-1 text-red-500">{error}</span>}
    </div>
  )
}
